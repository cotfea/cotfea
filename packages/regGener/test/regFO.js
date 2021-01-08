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

    Reg('\\s*')

  ,

    Reg.group('=')

  ])

console.log(reg)

export {
  word
, withOutDot
, wswodw
, reg
}
