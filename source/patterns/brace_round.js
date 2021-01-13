import { patternsPeer } from './util.js'

const parttern = patternsPeer(
  {
    sign: {
      begin: "\\("
    , end: "\\)"
    }
  , color: 'meta.brace.round.coffee'
  }
)

export default parttern
