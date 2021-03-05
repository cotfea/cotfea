import { patternsPeer } from './utils/util.js'
import patternColor from './utils/color.js'

const patterns = [
    {
      begin: '{'
    , end: '}'
    }
  , {
      begin: '\\('
    , end: '\\)'
    }
  , {
      begin: '\\['
    , end: '\\]'
    }
  ]
  .reduce(
    (r, c) =>
      [
        patternsPeer({
          sign: c
        , color: patternColor.bracket
        , options: {
            patterns: [{
              include: '$self'
            }]
          }
        })
      , ...r
      ]
  , []
  )

export default patterns
