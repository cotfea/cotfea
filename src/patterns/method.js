import Reg from "../../packages/regGener/src/index.js"
import color from "./utils/color.js"

const pattern = {
  patterns: [{ 
    match:
      Reg.pipe([
        Reg.precededBy(
          '\\.'
        )
      , '\\w*\\b'
      ])
      .toString()
  , name: color.method
  }]
}

export default pattern
