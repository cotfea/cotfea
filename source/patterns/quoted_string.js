import {
  patternsWapper
, patternsPeer
} from './util.js'

const partternGener = ({
  type = ''
, sign = ''
}) =>
  patternsWapper(
    patternsPeer({
      name: `string.quoted.${type}.coffee`
    , sign
    , color: {
        begin: 'punctuation.definition.string.begin.coffee'
      , end: 'punctuation.definition.string.end.coffee'
      }
    })
  )

const parttern = partternGener({
  single: {
    type: 'single'
  , sign: "'"
  }
, double: {
    type: 'double'
  , sign: '"'
  }
})

export default parttern
