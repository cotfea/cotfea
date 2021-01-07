import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regOF from './regOF.js'
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
        regOF[c].toString()
      , assertData[c].value
      )
    )
)
