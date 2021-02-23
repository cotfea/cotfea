import { __ } from '../../src/util.js'

const confArr = Deno.readTextFileSync(
  `${__.dirname(import.meta.url)}/tmLanguage.bk.cotfea`
)
.split('\n')
.filter(
  c => c !== ''
)

const conf = confArr.reduce(
  (r, c) => [
    ...r
  , {
      name: c
    , match: c
    , captures: {
        0: {
          name: c
        }
      }
    }
  ]
, []
)

export default conf
