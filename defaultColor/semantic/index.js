const vscode = require("vscode");
const arrToMapValueIndex = (arr) => arr.reduce((p, c, i) => ({
  ...p,
  [c]: i
})
  , {
  })
  ;
const parseText = ({ text, parseTextToken }) => text.split(/\r\n|\r|\n/).reduce((r, line, i) => {
  const handler = ({ line: _line, currentOffset, result }) => {
    const openOffset = _line.indexOf('[', currentOffset);
    const closeOffset = _line.indexOf(']', openOffset);
    return openOffset === -1 || closeOffset === -1 ? result : handler((() => {
      const token = _line.substring(openOffset + 1, closeOffset);
      return {
        line: _line,
        currentOffset: closeOffset,
        result: (() => {
          const tokenData = parseTextToken(token);
          result.push({
            line: i,
            startCharacter: openOffset + 1,
            length: closeOffset - openOffset - 1,
            tokenType: tokenData.tokenType,
            tokenModifiers: tokenData.tokenModifiers
          });
          return result;
        })()
      };
    })());
  };
  return [
    ...r,
    ...handler({
      line,
      currentOffset: 0,
      result: []
    })
  ];
}, [])
  ;
const tokenTypesLegend = [
  'comment',
  'string',
  'keyword',
  'number',
  'regexp',
  'operator',
  'namespace',
  'type',
  'struct',
  'class',
  'interface',
  'enum',
  'typeParameter',
  'function',
  'method',
  'macro',
  'variable',
  'parameter',
  'property',
  'label'
];
const tokenModifiersLegend = [
  'declaration',
  'documentation',
  'readonly',
  'static',
  'abstract',
  'deprecated',
  'modification',
  'async'
];
const tokenTypes = arrToMapValueIndex(tokenTypesLegend);
const tokenModifiers = arrToMapValueIndex(tokenModifiersLegend);
const legend = new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
class DocumentSemanticTokensProvider {
  _encodeTokenType = (tokenType) => tokenTypesLegend.includes(tokenType) ? tokenTypes[tokenType] : tokenType === 'notInLegend' ? tokenTypes.size + 2 : 0
    ;
  _encodeTokenModifiers = (strTokenModifiers) => strTokenModifiers.reduce((result, tokenModifier) => tokenModifiersLegend.includes(tokenModifier) ? result | 1 << tokenModifiers[tokenModifier] : tokenModifier === 'notInLegend' ? result | 1 << tokenModifiers.size + 2 : result
    , 0)
    ;
  _parseTextToken = (text) => {
    const parts = text.split('.');
    return {
      tokenType: parts[0],
      tokenModifiers: parts.slice(1)
    };
  };
  _parseText(text) {
    return parseText({
      text,
      parseTextToken: this._parseTextToken
    });
  }
  async provideDocumentSemanticTokens(document, token) {
    const allTokens = this._parseText(document.getText());
    const builder = new vscode.SemanticTokensBuilder();
    allTokens.forEach((token) => {
      builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
    });
    return builder.build();
  }
}
const activate = (context) => context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({
  language: 'semanticLanguage'
}, new DocumentSemanticTokensProvider(), legend))
  ;
exports.activate = activate;

