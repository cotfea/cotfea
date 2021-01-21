import './index.test.js'

import Reg from '../src/index.js'

import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"

const reg = {
  assert: '0(x|X)'
, gener:
    Reg
    .pipe('0')
    .group()
    .or([
      'x'
    , 'X'
    ])
    .toString()
}

Deno.test(
  'regex group_or'
, () =>
  assertEquals(
    reg.assert
  , reg.gener
  )
)
