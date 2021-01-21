import { patternsPeer } from './util.js'

const comment = patternsPeer({
  name: "comment.line.number-sign.cotfea"
, sign: {
    begin: '#'
  , end: '$'
  }
, color: {
    begin: "punctuation.definition.comment.coffee"
  }
})

export default comment
