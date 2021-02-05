// import * as vscode from 'vscode'
const vscode = require("vscode");

import { arrToMapValueIndex } from './util.js'
import parseText from './parseText.js'

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
  _encodeTokenModifiers = strTokenModifiers =>

    strTokenModifiers.reduce(
      (result, tokenModifier) =>
        tokenModifiersLegend.includes(tokenModifier) 
        ? result | (1 << tokenModifiers[tokenModifier])
        : tokenModifier === 'notInLegend'
        ? result | (1 << tokenModifiers.size + 2)
        : result
    , 0
    )

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

  // private: string -> IParsedToken[]
  _parseText(text) {
    return parseText({
      text
    , parseTextToken: this._parseTextToken
    })
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

const activate = context =>
  context
  .subscriptions
  .push(
    vscode
    .languages
    .registerDocumentSemanticTokensProvider(
      { language: 'semanticLanguage' }
    , new DocumentSemanticTokensProvider()
    , legend
    )
  )

// export {
//   activate
// }
exports.activate = activate
