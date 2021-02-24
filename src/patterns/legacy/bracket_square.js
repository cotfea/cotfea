import {
  include
, patternsWapper
, patternsPeer
} from './util.js'

const pattern = patternsPeer({
  sign: {
    begin: "\\["
  , end: "\\]"
  }
, color: 'keyword.operator.assignment.compound.coffee'

// punctuation.definition.array.begin.bracket.square.cotfea
// punctuation.definition.array.end.bracket.square.cotfea

, options: patternsWapper([
    include('$self')
  ])
})

export default pattern
