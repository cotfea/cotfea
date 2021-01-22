import { patternsPeer } from './util.js'

const pattern = patternsPeer(
  {
    sign: {
      begin: "\\("
    , end: "\\)"
    }
  , color: 'meta.brace.round.coffee'
  }
)

export default pattern
