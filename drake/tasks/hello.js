import { drake } from "../deps.js"
const {
  desc
, task
, sh
} = drake

export default () =>
  desc('Hello World!!!')
  task(
    'hello'
  , []
  , async function() {
    await sh('echo "Hello World!!!"') 
    console.log('Hello Deno Drake!!!')
  })
