import Reg from '../src/index.js'

const word =
  Reg([
    '\\b'
  , '\\w+'
  , '\\b'
  ])

const withOutDot =
  Reg.notPrecededBy('\\.')

const wswodw =
  Reg([
    '\\s*'
  , withOutDot
  , word
  ])

const reg =

  Reg([

    Reg
    .group([
      '^'
    , wswodw
    ])

  ,

    Reg
    .group([
      Reg
      .unGroup(
        wswodw
      )
    , '*'
    ])

  ,

    '\\s*'

  ,

    Reg.group('=')

  ])

export {
  word
, withOutDot
, wswodw
, reg
}
