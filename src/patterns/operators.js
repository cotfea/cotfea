import Reg from "../../packages/regGener/src/index.js"
import color from "./color.js"

const preVar =
  Reg.pipe([
    Reg.group()
    .pipe([
      Reg.oneOf([
        'a-z'
      , 'A-Z'
      , '$_'
      ])
    , Reg.oneOf([
        '\\w'
      , '$'
      ])
    , '*'
    ])
  , '?'
  , '\\s*'
  ])

const pattern = [
  ...[
    // base
    '\\+|-|\\*|/|%'
    // decrement && increment
  , '\\+\\+|--'
  , '<<|>>>|>>'
  , '!=|<=|>=|==|={3}|>|<'
  , '&&|!|\\|\\|'
  , '&|\\||\\^|~'
  , '\\.\\.\\.'
  , '\\?'
  ]
  .reduce(
    (r, c) => [
      ...r
    , {
        match: c 
      , name: color.operator
      }
    ]
  , []
  )
, ...[
    Reg.or([
      '='
    , '\\+='
    , '-='
    , '*='
    , '/='
    , '%='
    , '&&='
    , '\\|\\|='
    , '\\?='
    ])
  , Reg.or([
      '&='
    , '|='
    , '\\^='
    , '<<='
    , '>>='
    , '>>>='
    ])
  ]
  .reduce(
    (r, c) => [
      ...r
    , Reg.pipe([
        preVar
      , Reg.group(c)
      ]).toString()
    ]
  , []
  )
  .reduce(
    (r, c) => [
      ...r
    , {
        match: c
      , captures: {
          1: {
            name: color.variable
          }
        , 2: {
            name: color.operator
          }
        }
      }
    ]
  , []
  )
]

export default pattern
