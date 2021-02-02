import * as vscode from 'vscode'

const arrToMapValueIndex = arr =>
  arr.reduce(
    (p, c, i) => (
      {
        ...p
      , [c]: i
      }
    )
  , {}
  )

const tokenTypesLegend = [
  'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace'
, 'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function'
, 'method', 'macro', 'variable', 'parameter', 'property', 'label'
]

const tokenModifiersLegend = [
  'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated'
, 'modification', 'async'
]

const tokenTypes =
  arrToMapValueIndex(tokenTypesLegend)
const tokenModifiers =
  arrToMapValueIndex(tokenModifiersLegend)

const legend = 
  new vscode.SemanticTokensLegend(
    tokenTypesLegend
  , tokenModifiersLegend
  )

const activate = context =>
  context.subscriptions.push(
    vscode.languages
    .registerDocumentSemanticTokensProvider(
      { language: 'semanticLanguage' }
    , new DocumentSemanticTokensProvider()
    , legend
    )
  )

// interface IParsedToken {
// 	line: number;
// 	startCharacter: number;
// 	length: number;
// 	tokenType: string;
// 	tokenModifiers: string[];
// }

// implements vscode.DocumentSemanticTokensProvider
class DocumentSemanticTokensProvider {

  // private: string -> number
  _encodeTokenType = tokenType =>
    tokenTypesLegend.includes(tokenType)
    ? tokenTypes[tokenType] //!
    : tokenType === 'notInLegend'
    ? tokenTypes.size + 2
    : 0

  // private: string[] -> number
  _encodeTokenModifiers(strTokenModifiers) {

    strTokenModifiers.reduce(
      (result, tokenModifier) =>
        tokenModifiersLegend.includes(tokenModifier) 
        ? result | (1 << tokenModifiers[tokenModifier])
        : tokenModifier === 'notInLegend'
        ? result | (1 << tokenModifiers.size + 2)
        : result
    , 0
    )
  }

  // private: string -> IParsedToken[]
  _parseText(text) {

    // IParsedToken[]
    const r = []
    const lines = text.split(/\r\n|\r|\n/)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      let currentOffset = 0
      do {
        const openOffset = line.indexOf('[', currentOffset);
        if (openOffset === -1) {
          break;
        }
        const closeOffset = line.indexOf(']', openOffset);
        if (closeOffset === -1) {
          break;
        }
        const tokenData = this._parseTextToken(line.substring(openOffset + 1, closeOffset));
        r.push({
          line: i,
          startCharacter: openOffset + 1,
          length: closeOffset - openOffset - 1,
          tokenType: tokenData.tokenType,
          tokenModifiers: tokenData.tokenModifiers
        });
        currentOffset = closeOffset;
      } while (true)
    }
    return r
  }

  // private: string -> {
  //		tokenType: string
  //		tokenModifiers: string[]
  // }
  _parseTextToken = text => {
    const parts = text.split('.')
    return {
      tokenType: parts[0]
    , tokenModifiers: parts.slice(1)
    }
  }

  // vscode.TextDocument -> vscode.CancellationToken -> Promise<vscode.SemanticTokens>
  async provideDocumentSemanticTokens(document, token) {
    const allTokens =
      this._parseText(document.getText())
    const builder =
      new vscode.SemanticTokensBuilder()
    allTokens.forEach(
      (token) => {
        builder.push(
          token.line
        , token.startCharacter
        , token.length
        , this._encodeTokenType(token.tokenType)
        , this._encodeTokenModifiers(token.tokenModifiers)
        )
      }
    )
    return builder.build()
  }

}

export {
  activate
}
