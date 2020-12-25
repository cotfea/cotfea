import Reg from '../../../source/es6/utils/reg/reg.js'
import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts";
import * as regFp from './reg.js'
import * as assertData from './assertData.js'

Deno.test(
  'Regex word'
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.word
    })
  , assertData.word
  )
)

Deno.test(
  'Regex withOutDot'
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.withOutDot
    })
  , assertData.withOutDot
  )
)

Deno.test(
  'Regex wswodw'
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.wswodw
    })
  , `\\s*${assertData.withOutDot}${assertData.word}`
  )
)

Deno.test(
  'Regex regex'
, () =>
  assertEquals(
    Reg.regString({
      reg: regFp.reg
    })
  , assertData.reg
  )
)
