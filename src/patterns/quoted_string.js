import { patternsPeer } from './util.js'

const colorName = (be) =>
  `punctuation.definition.string.${be}.coffee`

const patternGener = ({
  type = ''
, sign = ''
}) =>
  patternsPeer({
    name: `string.quoted.${type}.coffee`
  , sign
  , color: {
      begin: colorName('begin')
    , end: colorName('end')
    }
  })

const pattern =
  {
    single: patternGener({
      type: 'single'
    , sign: "'"
    })
  , double: patternGener({
      type: 'double'
    , sign: '"'
    })
  }

export default pattern
