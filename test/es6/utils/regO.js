import Reg from '../../../source/es6/utils/reg/index.js'

// console.log(
//   new Reg()
//   .pipe('(')
//   .pipe('^')
//   .pipe(')')
//   .toString()
// )

// console.log(
//   new Reg()
//   .pipe([
//     '('
//   , '^'
//   , ')'
//   ])
//   .toString()
// )

// const word =
//   new Reg()
//   .pipe([
//     '\\b'
//   , '\\w+'
//   , '\\b'
//   ])

// console.log(word.toString())

// const withOutDot =
//   new Reg()
//   .notPrecededBy('\\.')

// console.log(withOutDot.toString())

// const wswodw =
//   new Reg()
//   .pipe([
//     '\\s*'
//   , withOutDot
//   , word
//   ])

// console.log(wswodw.toString())

const reg =

  // new Reg()
  // .pipe([

  //   new Reg()
  //   .group(

  //     new Reg()
  //     .pipe([
  //       '^'
  //     , wswodw
  //     ])

  //   )

  // ,

    // new Reg()
    // .group()

      new Reg()
      // .pipe([
        // new Reg()
        // .unGroup(
          // '^'
          // wswodw
        // )
      // , '*'
      // ])

    // )

  // ,

  //   new Reg()
  //   .pipe('\\s*')

  // ,

  //   new Reg()
  //   .group('=')

  // ])

console.log(reg.toString())
