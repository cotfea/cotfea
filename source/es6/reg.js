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

const multiSpace = '\\s*'

const ww =
  Reg([
    withOutDot
  , word
  ])

const mww =
  Reg([
    multiSpace
  , ww
  ])

const reg = 
  Reg
  .unGroup()
  .or([
    Reg.pipe([
      Reg
      .group([
        '^'
      , mww
      ])
    ,
      Reg
      .group([
        Reg
        .unGroup(
          mww
        )
      , '*'
      ])

    , multiSpace
    , Reg.group('=')

    ])
  ,
    Reg.pipe([
      Reg.unGroup(ww)
    ,
      Reg.group([
        Reg.unGroup(mww)
      , '*'
      ])

    , multiSpace
    , Reg.group('=')
    ])
  ,
    Reg.pipe([
      Reg.group([
        Reg.unGroup(
          mww
        )
      , '*'
      ])
    , multiSpace
    , Reg.group('=')
    ])
  ])

console.log(reg.toString())
console.log("(?:(^\\s*(?<!\\.)\\b\\w+\\b)((?:\\s*(?<!\\.)\\b\\w+\\b)*)\\s*(=)|(?:(?<!\\.)\\b\\w+\\b)((?:\\s*(?<!\\.)\\b\\w+\\b)*)\\s*(=)|((?:\\s*(?<!\\.)\\b\\w+\\b)*)\\s*(=))")
