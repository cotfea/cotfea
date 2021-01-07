import Reg from '../../../source/es6/utils/reg/OO.js'
import * as regOO from './regOO.js'

const {
  word
, withOutDot
, wswodw
} = regOO

const reg =
  new Reg()
  .pipe([

    r => r
    .group()
    .pipe([
      '^'
    , wswodw
    ])

  ,

    r => r
    .group()
    .pipe([
      r => r
      .unGroup()
      .pipe(wswodw)
    , '*'
    ])

  ,

    r => r
    .pipe('\\s*')

  ,

    r => r
    .group('=')

  ])

export {
  word
, withOutDot
, wswodw
, reg
}

