import Reg from '../../packages/regGener/index.js'

const capturesColor =
  'punctuation.definition.comment.coffee'

const comment = {
  name: 'comment.block.cotfea'
, begin: // '(?<!#)###(?!#)'
    Reg.pipe([
      Reg.notPrecededBy('#')
    , '#{3}'
    , Reg.notFollowedBy('#')
    ])
, beginCaptures: {
    0: {
      name: capturesColor
    }
  }
, end: '#{3}'
, endCaptures: {
    0: {
      name: capturesColor
    }
  }
, patterns: [
    {
      name: 'comment.block.content.cotfea'
    , match: '(.*).'
    , captures: {
        1: {
          name: capturesColor
        }
      }
    }
  ]
}

export default comment
