const word = '\\b\\w+\\b'
const withOutDot = '(?<!\\.)'
const reg = [
  '('
, '^'
, '\\s*'
, withOutDot
, word
, ')'
, '('
, '('
, '?:'
, '\\s*'
, withOutDot
, word
, ')'
, '*'
, ')'
, '\\s*'
, '('
, '='
, ')'
].join('')

export {
  word
, withOutDot
, reg
}
