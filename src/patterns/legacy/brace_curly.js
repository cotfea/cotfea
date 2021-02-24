import { patternsPeer } from './util.js'

const pattern = patternsPeer(
  {
    sign: {
      begin: '{'
    , end: '}'
    }
  , color: 'meta.brace.curly.coffee'
  }
)

export default pattern
