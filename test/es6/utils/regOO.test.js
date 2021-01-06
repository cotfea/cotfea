import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regOO from './regOO.js'
import assertData from './assertData.js'

Deno.test(
  assertData.word.name
, () =>
  assertEquals(
    regOO.word.toString()
  , assertData.word.value
  )
)

Deno.test(
  assertData.withOutDot.name
, () =>
  assertEquals(
    regOO.withOutDot.toString()
  , assertData.withOutDot.value
  )
)

Deno.test(
  assertData.wswodw.name
, () =>
  assertEquals(
    regOO.wswodw.toString()
  , assertData.wswodw.value
  )
)

Deno.test(
  assertData.reg.name
, () =>
  assertEquals(
    regOO.reg.toString()
  , assertData.reg.value
  )
)
