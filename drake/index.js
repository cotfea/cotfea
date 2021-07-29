import { drake } from "./deps.js"
const {
  run
} = drake

import tasks from './tasks/index.js'

export default () => {
  tasks()
  run()
}
