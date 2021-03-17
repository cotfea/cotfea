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

desc('theme generator')
task(
  'theme'
, []
, async function() {
 
  // https://raw.githubusercontent.com/wesbos/cobalt2-vscode/master/theme/cobalt2.json
  // https://raw.githubusercontent.com/gaplo917/GapStyle/master/vscode/src/gapstyle.yml

  const res = await fetch('https://raw.githubusercontent.com/wesbos/cobalt2-vscode/master/theme/cobalt2.json')

  const objByteArr = await
    res.body
    .getReader()
    .read()

  const {done, value} = objByteArr

  if (done) {
    return
  }

  const str =
    value
    .reduce(
      (r, c) => [
        ...r
      , String.fromCharCode(c)
      ]
    , []
    )
    .join('')

  console.log(
    JSON.stringify(
      JSON.parse(
        str.replace(/.*\/\/.*\n/g, '')
        .replace(/,(?=\n.*[}|\]])/g, '')
      )
    , null
    , 2
    )
  )

  // console.log(JSON.stringify(JSON.parse(str)), null, 2)

})

run()
