// cat ./syntaxes/coffee/coffee.tmLanguage.yml | grep 'name:' | sed -e 's/ //g' | sed -e 's/name://g' | sed -e 's/^-//g' | sort | uniq > ./src/scope_color/index.cotfea

import { __ } from '../util.js'

const confArr = Deno.readTextFileSync(
  `${__.dirname(import.meta.url)}/index.cotfea`
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
