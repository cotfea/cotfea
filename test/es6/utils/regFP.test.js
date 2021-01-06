import Reg from '../../../source/es6/utils/reg/reg.js'
import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"
import * as regFp from './regFp.js'
import assertData from './assertData.js'

Deno.test(
  assertData.word.name
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.word
    })
  , assertData.word.value
  )
)

Deno.test(
  assertData.withOutDot.name
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.withOutDot
    })
  , assertData.withOutDot.value
  )
)

Deno.test(
  assertData.wswodw.name
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.wswodw
    })
  , assertData.wswodw.value
  )
)

Deno.test(
  assertData.reg.name
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.reg
    })
  , assertData.reg.value
  )
)
