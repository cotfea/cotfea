import { patternsPeer } from './util.js'

const pattern = patternsPeer({
  name: ''
, sign: {
    begin: "\\["
  , end: "\\]"
  }
, color: 'keyword.operator.assignment.compound.coffee'

// punctuation.definition.array.begin.bracket.square.cotfea
// punctuation.definition.array.end.bracket.square.cotfea

})

export default pattern
