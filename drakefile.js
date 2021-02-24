import {
  desc
, run
, task
, sh
} from "https://deno.land/x/drake@v1.4.6/mod.ts"
import { __ } from './src/util.js'
import tmlangConfig from './src/index.js'

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

run()
