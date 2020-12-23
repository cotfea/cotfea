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
import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts";


const word =
  new Reg()
  .arrPipe([
    '\\b'
  , '\\w+'
  , '\\b'
  ]);

const word_ts = '\\b\\w+\\b'
Deno.test(
  'Regex word'
, () =>
  assertEquals(word.toString(), word_ts)
)

const withOutDot =
  new Reg()
  .notPrecededBy(
    '\\.'
  )

const withOutDot_ts = '(?<!\\.)'
Deno.test(
  'Regex withOutDot'
, () =>
  assertEquals(withOutDot.toString(), withOutDot_ts)
)

// withSpace && withOutDotWor
const wswodw =
  new Reg()
  .arrPipe([
    '\\s*'
  , withOutDot
  , word
  ])

Deno.test(
  'Regex wswodw'
, () =>
  assertEquals(wswodw.toString()
  , `\\s*${withOutDot_ts}${word_ts}`
  )
)

const O =

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

      r => r
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

const F = Reg([
  Reg.group([
    '^'
  , wswodw
  ])
, Reg.group([
    Reg.unGroup(wswodw)
  , '*'
  ])
, '\\s*'
, Reg.group('=')
])

const regex_ts = [
  '('
, '^'
, '\\s*'
, withOutDot_ts
, word_ts
, ')'
, '('
, '('
, '?:'
, '\\s*'
, withOutDot_ts
, word_ts
, ')'
, '*'
, ')'
, '\\s*'
, '('
, '='
, ')'
].join('')

Deno.test(
  'Regex regex'
, () => {
    assertEquals(F.toString(), regex_ts)
    assertEquals(O.toString(), regex_ts)
  }
)

console.log(
  Reg(
    // new Reg()
    Reg
    .unGroup()
    // .or(
    //   Reg.group(
    //     '^'
    //   )
    // )
  )
  .toString()
)
