import { patternsPeer } from './util.js'

const patternGener = ({
  type = ''
, sign = ''
}) => patternsPeer({
  name: `string.quoted.${type}.heredoc.cotfea`
, sign
, color: {
    begin: 'punctuation.definition.string.begin.coffee'
  , end: 'punctuation.definition.string.end.coffee'
  } 
})

const pattern = {
  single: patternGener({
    type: 'single'
  , sign: "'''"
  })
, double: patternGener({
    type: 'double'
  , sign: '"""'
  })
}

export default pattern
