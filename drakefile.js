import {
  desc
, run
, task
, sh
} from "https://deno.land/x/drake@v1.4.6/mod.ts"
import { __ } from './src/util.js'
import tmlangConfig from './src/index.js'

import {
  gitRawJson
, jsonParse
} from './drake/index.js'

import {
  parse as yamlParse
// , parseAll as yamlParseAll
, stringify as yamlStringify
} from 'https://deno.land/std@0.82.0/encoding/yaml.ts';


desc('Hello World!!!')
task(
  'hello'
, []
, async function() {
  await sh('echo "Hello World!!!"') 
})

desc('tmLanguage json generator')
task(
  'tmlang'
, []
, async function() {
    await Deno.writeTextFile(
      `${__.dirname(import.meta.url)}/syntaxes/cotfea.tmLanguage.json`
    , [
        JSON.stringify(
          tmlangConfig
        , null, 2
        )
      , '\n'
      ].join('')
    )
})

desc('theme generator')
task(
  'theme'
, []
, async function() {
 
  // https://raw.githubusercontent.com/wesbos/cobalt2-vscode/master/theme/cobalt2.json
  // https://raw.githubusercontent.com/gaplo917/GapStyle/master/vscode/src/gapstyle.yml

  const url = 'https://raw.githubusercontent.com/gaplo917/GapStyle/master/vscode/src/gapstyle.yml'

  console.log(
    JSON.stringify(
      yamlParse(await gitRawJson(url))
      // jsonParse(await gitRawJson(url))
    , null
    , 2
    )
  )

  // console.log(JSON.stringify(JSON.parse(str)), null, 2)

})

run()
