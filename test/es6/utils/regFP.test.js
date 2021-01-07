import Reg from '../../../source/es6/utils/reg/reg.js'
import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regFp from './regFP.js'
import assertData from './assertData.js'

[
  'word'
, 'withOutDot'
, 'wswodw'
, 'reg'
]
.forEach(
  c => 
    Deno.test(
      assertData[c].name
    , () =>
      assertEquals(
        Reg.regString({
          reg: regFp[c]
        })
      , assertData[c].value
      )
    )
)
