import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regOF from './regOF.js'
import assertData from './assertData.js'

Deno.test(
  assertData.word.name
, () =>
  assertEquals(
    regOF.word.toString()
  , assertData.word.value
  )
)

Deno.test(
  assertData.withOutDot.name
, () =>
  assertEquals(
    regOF.withOutDot.toString()
  , assertData.withOutDot.value
  )
)

Deno.test(
  assertData.wswodw.name
, () =>
  assertEquals(
    regOF.wswodw.toString()
  , assertData.wswodw.value
  )
)

Deno.test(
  assertData.reg.name
, () =>
  assertEquals(
    regOF.reg.toString()
  , assertData.reg.value
  )
)
