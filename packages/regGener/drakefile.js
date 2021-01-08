/***
 * deno run -A ./drakefile.js test
 */

import {
  desc
, run
, task
, sh
} from "https://deno.land/x/drake@v1.4.6/mod.ts"

desc('Testing')
task(
  'test'
, []
, async function() {
  await sh('deno test ./test/index.js') 
})

run()
