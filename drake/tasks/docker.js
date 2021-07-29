import { drake } from "../deps.js"
const {
  desc
, task
, sh
} = drake

export default () => {
  desc('run in docker')
  task(
    'docker'
  , []
  , async function() {

      await sh(
        [
          'podman run --rm -ti'
        ,     '--name=deno'
        ,     '-p 3000:3000'
        ,     '-p 8080:8080'
        ,     '-v $(pwd):/root/deno'
        ,   'mooxe/deno'
        ,     '/bin/bash'
        ].join(' ')
      )

    }
  )
}
