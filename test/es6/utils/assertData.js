const word = '\\b\\w+\\b'
const withOutDot = '(?<!\\.)'
const wswodw = `\\s*${withOutDot}${word}`
const reg = [
  '('
,   '^'
,   wswodw
, ')'
, '('
,   '('
,     '?:'
,     wswodw
,   ')'
,   '*'
, ')'
, '\\s*'
, '('
,   '='
, ')'
].join('')

const data = {
  word: {
    name: 'Regex word'
  , value: word
  }
, withOutDot: {
    name: 'Regex withOutDot'
  , value: withOutDot
  }
, wswodw: {
    name: 'Regex wswodw'
  , value: wswodw
  }
, reg: {
    name: 'Regex regex'
  , value: reg
  }
}

export default data
