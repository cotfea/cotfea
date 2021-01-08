import Reg from '../../packages/regGener/index.js'

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
  Reg.or([
    Reg.pipe([

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
    // .or('abc')
  , 'abc'
  ])

console.log(reg.toString())
