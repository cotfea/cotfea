import Reg from './OO.js'
import { apiKeys } from './FP.js'

const Regex = (args) => (new Reg()).pipe(args)

const apikeys = [
  'pipe'
, 'or'
, ...Object.keys(apiKeys)
]

apikeys
.forEach(
  key =>
    Regex[key] = (args) =>
      (new Reg())[key](args)
)

export default Regex
