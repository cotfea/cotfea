import Reg from '../../../source/es6/utils/reg/FP.js'

const word =
  Reg.pipe({
    reg: Reg.createReg()
  , content: [
      '\\b'
    , '\\w+'
    , '\\b'
    ]
  })

const withOutDot =
  Reg.notPrecededBy({
    reg: Reg.createReg()
  , content: '\\.'
  })

// withSpace && withOutDotWor
const wswodw =
  Reg.pipe({
    reg: Reg.createReg()
  , content: [
    '\\s*'
  , withOutDot
  , word
  ]
  })

const reg =
  Reg.pipe({
    reg: Reg.createReg()
  , content: [

      Reg
      .group({
        reg: Reg.createReg()
      , content:
          Reg
          .pipe({
            reg: Reg.createReg()
          , content: [
              '^'
            , wswodw
            ]
          })
      })  

    ,

      Reg
      .group({
        reg: Reg.createReg()
      , content:
          Reg
          .pipe({
            reg: Reg.createReg()
          , content: [
              Reg
              .unGroup({
                reg: Reg.createReg()
              , content: wswodw
              })
            , '*'
            ]
          })
      })

    , Reg.pipe({
        reg: Reg.createReg()
      , content: '\\s*'
      })

    , Reg.group({
        reg: Reg.createReg()
      , content: '='
      })

    ]
  })

export {
  word
, withOutDot
, wswodw
, reg
}

// // const F = Reg([
// //   Reg.group([
// //     '^'
// //   , wswodw
// //   ])
// // , Reg.group([
// //     Reg.unGroup(wswodw)
// //   , '*'
// //   ])
// // , '\\s*'
// // , Reg.group('=')
// // ])

