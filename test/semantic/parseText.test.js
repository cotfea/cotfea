import {
  assertEquals
} from "https://deno.land/std@0.82.0/testing/asserts.ts"

import parseText from '../../src/semantic/parseText.js'

const tokenType = 'tokenType'
const tokenModifiers = 'tokenModifiers'

const parseTextToken = () => ({
  tokenType
, tokenModifiers
})

const line = `
  [hello][123]aabbcc
  [world][456]223344
  [hello][world]....
  [javascript][typescript]!!!!!
`

const tokenObj = parseText({
  text: line
, parseTextToken
})

// console.log(
//   tokenObj
// )

const assertData = [
  {
    line: 1
  , startCharacter: 3
  , length: 5
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 1
  , startCharacter: 10
  , length: 3
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 2
  , startCharacter: 3
  , length: 5
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 2
  , startCharacter: 10
  , length: 3
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 3
  , startCharacter: 3
  , length: 5
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 3
  , startCharacter: 10
  , length: 5
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 4
  , startCharacter: 3
  , length: 10
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
, {
    line: 4
  , startCharacter: 15
  , length: 10
  , tokenType: "tokenType"
  , tokenModifiers: "tokenModifiers"
  }
]

Deno.test(
  'parseTextToTokenObj'
, () =>
  assertEquals(
    JSON.stringify(tokenObj, null, 2)
  , JSON.stringify(assertData, null, 2)
  )
)
