import { patternsPeer } from './util.js'
import patternColor from './color.js'

const patterns = [
    "'"
  , '"'
  , '"{3}'
  // , '`'
  // , '`{3}'
  ]
  .reduce(
    (r, c) =>
      [
        patternsPeer({
          sign: c
        , color: patternColor.string
        , name: patternColor.string
        })
      , ...r
      ]
  , []
  )

export default patterns
