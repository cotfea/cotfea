import Reg from '../../packages/regGener/index.js'
import { patternsPeer } from './util.js'
import patternColor from './color.js'

const pattern = patternsPeer({
  sign: {
    begin:
      Reg.or[
        "'"
      , '"'
      , '"{3}'
      , '`'
      , '`{3}'
      , '{'
      , '('
      ]
      .toString()
  , end: 
      Reg.or[
        "'"
      , '"'
      , '"{3}'
      , '`'
      , '`{3}'
      , '}'
      , ')'
      ]
      .toString()
  }
, color: patternColor.bracket
})

export default pattern
