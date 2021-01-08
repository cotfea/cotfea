import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regFO from './regFO.js'
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
        regFO[c].toString()
      , assertData[c].value
      )
    )   
)
