import Reg from '../../packages/regGener/index.js'
import { patternsPeer } from './util.js'

const pattern = patternsPeer({
  name: 'meta.definition.array.sign.cotfea'
, sign: {
    begin: Reg.pipe([
      Reg.precededBy([
        '^'
      , '\\s'
      , '*'
      ])
    , '-'
    ]).toString()
  , end: '\\s'
  }
, color: {
    begin: 'keyword.operator.assignment.compound.coffee'
  }
})

export default pattern
