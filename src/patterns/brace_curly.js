import { patternsPeer } from './util.js'

const parttern = patternsPeer(
  {
    sign: {
      begin: '{'
    , end: '}'
    }
  , color: 'meta.brace.curly.coffee'
  }
)

export default parttern
