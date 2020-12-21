// (?:(^\s*(?<!\.)\b\w+\b)((?:\s*(?<!\.)\b\w+\b)*)\s*(=)|(?:(?<!\.)\b\w+\b)((?:\s*(?<!\.)\b\w+\b)*)\s*(=)|((?:\s*(?<!\.)\b\w+\b)*)\s*(=))

/***
 * (?:
 *    (^\s*(?<!\.)\b\w+\b)      # 1
 *    ((?:\s*(?<!\.)\b\w+\b)*)  # 2
 *    \s*
 *    (=)                       # 3
 * |  (?:(?<!\.)\b\w+\b)
 *    ((?:\s*(?<!\.)\b\w+\b)*)  # 4
 *    \s*
 *    (=)                       # 5
 * |  ((?:\s*(?<!\.)\b\w+\b)*)  # 6
 *    \s*
 *    (=)                       # 7
 * )
 */

import { Reg } from '../../../source/es6/utils/reg.js'

const word =
  new Reg()
  .arrPipe([
    '\\b'
  , '\\w+'
  , '\\b'
  ]);

const withOutDot =
  new Reg()
  .notPrecededBy(
    '\\.'
  )

// withSpace && withOutDotWor
const wswodw =
  new Reg()
  .arrPipe([
    '\\s*'
  , withOutDot
  , word
  ])

const reg =

  new Reg()
  .arrPipe([

    r => r
    .group()
    .arrPipe([
      '^'
    , wswodw
    ])

  , r => r
    .group()
    .arrPipe([

      new Reg()
      .unGroup(
        wswodw
      )

    , '*'

    ])

  // , r => r
  //   .pipe('\\s*')
  , '\\s*'

  , r => r
    .group(
      '='
    )
  ])

console.log(
  reg.toString()
)
