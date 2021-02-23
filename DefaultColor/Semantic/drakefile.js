import {
  desc
, run
, task
, sh
} from "https://deno.land/x/drake@v1.4.6/mod.ts"

desc('Hello World!!!')
task(
  'hello'
, []
, async function() {
  await sh('echo "Hello World!!!"') 
})


desc('build bundle')
task(
  'build'
, []
, async function() {
  await sh('deno bundle ./src/extension.js > ./dist/index.js') 
})

desc('dist extension')
task(
  'dist'
, []
, async function() {
  await sh('npx swc ./dist/index.js > ./dist/extension.dist.js')
})

run()
