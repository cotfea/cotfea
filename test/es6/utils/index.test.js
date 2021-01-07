import Reg from '../../../source/es6/utils/reg/FP.js'
import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"

import * as regFP from './regFP.js'
import * as regOO from './regOO.js'
import * as regOF from './regOF.js'
import * as regFO from './regFO.js'

import assertData from './assertData.js'

const regFn = {
  FP: regFP
, OO: regOO
, OF: regOF
, FO: regFO
}

const testFn = (testWay) => (testName) =>
  testWay === 'FP'
  ? Reg.regString({
     reg: regFn[testWay][testName]
    })
  : regFn[testWay][testName].toString()

const testWays = [
  'FP'
, 'OO'
, 'OF'
, 'FO'
]

const testNames = [
  'word'
, 'withOutDot'
, 'wswodw'
, 'reg'
]

testWays
.forEach(

  testWay => 

    testNames
    .forEach(

      testName => {

        Deno.test(
          assertData[testName].name
        , () =>
          assertEquals(
            testFn(testWay)(testName)
          , assertData[testName].value
          )
        )
      }
    )

)
