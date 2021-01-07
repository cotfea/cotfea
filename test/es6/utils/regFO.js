import Reg from '../../../source/es6/utils/reg/index.js'

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
    .group()
    .pipe([
      '^'
    , wswodw
    ])

  ,

    Reg
    .group()
    .pipe([
      Reg
      .unGroup()
      .pipe(wswodw)
    , '*'
    ])

  ,

    Reg('\\s*')

  ,

    Reg.group('=')

  ])

export {
  word
, withOutDot
, wswodw
, reg
}
