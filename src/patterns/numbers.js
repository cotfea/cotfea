import Reg from "../../packages/regGener/src/index.js"

const b = '\\b'
const wrapper = content => {

  const pre = Reg.pipe([
    b
  , Reg.notPrecededBy(
      '\\$'
    )
  ])

  const post = Reg.pipe([
    b
  , Reg.notFollowedBy(
      '\\$'
    )
  ])

  return Reg.pipe([
    pre
  , content
  , post
  ])
}

const mulNum =
  Reg.pipe([
    Reg.oneOf('0-9')
  , '+'
  ])

const e =
  Reg.pipe([
    Reg.oneOf('eE')
  , Reg.oneOf('+-')
  , '?'
  ])

const wrapperB = content =>
  Reg.unGroup()
  .pipe([
    b
  , ...content
  , b
  ])

const wrapperBn = content =>
  wrapperB([
    mulNum
  , ...content
  , mulNum
  ])

const pattern = [
  {
    name: 'constant.numeric.hex.coffee'
  , match: wrapper(
      Reg.pipe(
        '0'
      )
      .group()
      .or([
          'x'
        , 'X'
      ])
      .oneOf([
        '0-9'
      , 'a-f'
      , 'A-F'
      ])
    )
    .toString()
  }

, {
    name: 'constant.numeric.binary.coffee'
  , match: wrapper(
      Reg.pipe('0')
      .group()
      .or([
        'b'
      , 'B'
      ])
      .oneOf('01')
      .pipe('+')
    )
    .toString()
  }

, {
    name: 'constant.numeric.octal.coffee'
  , match: wrapper(
      Reg.pipe([
        '0'
      , Reg.group()
        .or([
          'o'
        , 'O'
        ])
      , '?'
      , Reg.oneOf('0-7')
      , '+'
      ])
      
    )
    .toString()
  }
, {
    match:

      // (?<!:x)
      // (?<!\\$)
      // (?:
      //   (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b) # 1.1E+3
      // | (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)       # 1.E+3
      // | (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)       # .1E+3
      // | (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)            # 1E+3
      // | (?:\\b[0-9]+(\\.)[0-9]+\\b)                # 1.1
      // | (?:\\b[0-9]+(?=\\.{2,3}))                  # 1 followed by a slice
      // | (?:\\b[0-9]+(\\.)\\B)                      # 1.
      // | (?:\\B(\\.)[0-9]+\\b)                      # .1
      // | (?:\\b[0-9]+\\b(?!\\.))                    # 1
      // )
      // (?!\\$)

      Reg.pipe([
        Reg.notPrecededBy('x')
      , Reg.notPrecededBy('\\$')
      , Reg.unGroup()
        .or([

          // 1.1E+3
          wrapperBn([
            Reg.group('\\.')
          , mulNum
          , e
          ])

          // 1E+3
        , wrapperBn([
            Reg.group('\\.')
          , e
          ])

          // .1E+3
        , wrapperB([
            Reg.group('\\.')
          , mulNum
          , e
          , mulNum
          ])

          // 1E+3
        , wrapperBn([e])

          // 1.1
        , wrapperBn([
            Reg.group('\\.')
          ])

          // 1 followed by a slice
        , Reg.unGroup()
          .pipe([
            b
          , mulNum
          , Reg.followedBy(
              '\\.{2, 3}'
            )
          ])

          // 1.
        , wrapperB([
            mulNum
          , Reg.group('\\.')
          ])

          // .1
        , wrapperB([
            Reg.group('\\.')
          , mulNum
          ])
        ])

          // 1
        , Reg.unGroup()
          .pipe([
            b
          , mulNum
          , b
          , Reg.notFollowedBy('\\.')
          ])
      ])

      .toString()
    
  , captures: {
      0: {
        name: 'constant.numeric.decimal.coffee'
      }
    , ...Array(6).fill()
      .reduce(
        (r, c, i) => ({
          ...r
        , [i + 1]: {
            name: 'punctuation.separator.decimal.period.coffee'
          }
        })
      , {}
      )
    }
  }
]

export default pattern
