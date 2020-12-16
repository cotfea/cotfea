import Reg from '../../../source/es6/utils/reg/index.js'
import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regO from './regO.js'
import assertData from './assertData.js'

Deno.test(
  assertData.word.name
, () =>
  assertEquals(
    regO.word.toString()
  , assertData.word.value
  )
)

Deno.test(
  assertData.withOutDot.name
, () =>
  assertEquals(
    regO.withOutDot.toString()
  , assertData.withOutDot.value
  )
)

Deno.test(
  assertData.wswodw.name
, () =>
  assertEquals(
    regO.wswodw.toString()
  , assertData.wswodw.value
  )
)

Deno.test(
  assertData.reg.name
, () =>
  assertEquals(
    regO.reg.toString()
  , assertData.reg.value
  )
)
