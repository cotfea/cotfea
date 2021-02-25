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
  { // base
    match: '\\+|-|\\*|/|%'
  , name: color.operator
  }
, { // decrement && increment
    match: '\\+\\+|--'
  , name: color.operator
  }
, {
    match: '='
  , name: color.operator
  }
]

export default pattern
