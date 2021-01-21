import Reg from '../packages/regGener/index.js'

const word =
  Reg([
    '\\b'
  , '\\w+'
  , '\\b'
  ])

const withoutDot =
  Reg.notPrecededBy('\\.')

const multiSpace = '\\s*'

const ww =
  Reg([
    withoutDot
  , word
  ])

const mww =
  Reg([
    multiSpace
  , ww
  ])

const reg = 
  Reg
  .unGroup()
  .or([
    Reg
    .group([
      '^'
    , mww
    ])
    .group([
      Reg
      .unGroup(
        mww
      )
    , '*'
    ])
  ,
    Reg
    .unGroup(ww)
    .group([
      Reg.unGroup(mww)
    , '*'
    ])
  ,
    Reg.group([
      Reg.unGroup(
        mww
      )
    , '*'
    ])
  ])
  .pipe([
    multiSpace
  , Reg.group('=')
  ])

export default reg
