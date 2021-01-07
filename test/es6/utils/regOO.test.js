import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regOO from './regOO.js'
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
        regOO[c].toString()
      , assertData[c].value
      )
    )   
)
