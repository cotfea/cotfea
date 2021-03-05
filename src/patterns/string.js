import { patternsPeer } from './utils/util.js'
import patternColor from './utils/color.js'

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
        ...r
      , patternsPeer({
          sign: c
        , color: patternColor.string
        , name: patternColor.string
        })
      ]
  , []
  )

export default patterns
