import {
  desc
, run
, task
, sh
} from "https://deno.land/x/drake@v1.4.6/mod.ts"

import genJson from './index.js'
import {
  patternsWapper
} from '../../src/patterns/util.js'


desc('Hello World!!!')
task(
  'hello'
, []
, async function() {
  await sh('echo "Hello World!!!"') 
})

desc('tmLanguage names generator')
task(
  'gen_tml_names'
, []
, async function() {
  // cat ./syntaxes/coffee/coffee.tmLanguage.yml | grep 'name:' | sed -e 's/ //g' | sed -e 's/name://g' | sed -e 's/^-//g' | sort | uniq > ./cotfea.tmLanguage.json
  await sh(
    [
      [
        'cat ../../syntaxes/coffee/coffee.tmLanguage.yml'
      , "grep 'name:'"
      , "sed -e 's/ //g'"
      , "sed -e 's/name://g'"
      , "sed -e 's/^-//g'"
      , 'sort'
      , 'uniq'
      ].join(' | ')
    , ' > '
    , './tmLanguage.cotfea'
    ].join('')
  )
})

desc('tmLanguage names generator')
task(
  'gen_tml_json'
, []
, async function() {
    const jsonStr = JSON.stringify(
      {
        name: 'CoTFea'
      , scopeName: 'source.cotfea'
      , ...patternsWapper(genJson)
      }
      , null, 2
    )
    // console.log(jsonStr)
    // await sh(`echo ${jsonStr}`)
    await Deno.writeTextFile(
      './cotfea.tmLanguage.bk.json'
    , jsonStr
    ) 
})

run()
