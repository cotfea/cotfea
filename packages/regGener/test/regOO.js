import Reg from '../src/OO.js'

const word =
  new Reg()
  .pipe([
    '\\b'
  , '\\w+'
  , '\\b'
  ])

const withOutDot =
  new Reg()
  .notPrecededBy('\\.')

const wswodw =
  new Reg()
  .pipe([
    '\\s*'
  , withOutDot
  , word
  ])

const reg =

  new Reg()
  .pipe([

    new Reg()
    .group()
    .pipe([
      '^'
    , wswodw
    ])

  ,

    new Reg()
    .group()
    .pipe([
      new Reg()
      .unGroup()
      .pipe(wswodw)
    , '*'
    ])

  ,

    new Reg()
    .pipe('\\s*')

  ,

    new Reg()
    .group('=')

  ])

export {
  word
, withOutDot
, wswodw
, reg
}
