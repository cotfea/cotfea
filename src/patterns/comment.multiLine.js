import {
  patternsWapper
, patternsPeer
} from './utils/util.js'
import Reg from '../../packages/regGener/index.js'

const capturesColor =
  'punctuation.definition.comment.coffee'

const comment = patternsPeer({
  name: 'comment.block.cotfea'
, sign: {
    begin:
      Reg.pipe([
        Reg.notPrecededBy('#')
      , '#{3}'
      , Reg.notFollowedBy('#')
      ]).toString()
  , end: '#{3}'
  }
, color: capturesColor
, options: patternsWapper([
    {
      name: 'comment.block.content.cotfea'
    , match: '(.*).'
    , captures: {
        1: {
          name: capturesColor
        }
      }
    }
  ])
})

export default comment
