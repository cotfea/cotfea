import { patternsPeer } from './util.js'

const colorName = (be) =>
  `punctuation.definition.string.${be}.coffee`

const partternGener = ({
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

const parttern =
  {
    single: partternGener({
      type: 'single'
    , sign: "'"
    })
  , double: partternGener({
      type: 'double'
    , sign: '"'
    })
  }

export default parttern
