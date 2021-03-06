// (?:(^\s*(?<!\.)\b\w+\b)((?:\s*(?<!\.)\b\w+\b)*)\s*(=)|(?:(?<!\.)\b\w+\b)((?:\s*(?<!\.)\b\w+\b)*)\s*(=)|((?:\s*(?<!\.)\b\w+\b)*)\s*(=))

/***
 * (?:
 *    (^\s*(?<!\.)\b\w+\b)      # 1
 *    ((?:\s*(?<!\.)\b\w+\b)*)  # 2
 * |  (?:(?<!\.)\b\w+\b)
 *    ((?:\s*(?<!\.)\b\w+\b)*)  # 3
 * |  ((?:\s*(?<!\.)\b\w+\b)*)  # 4
 * )
 * \s*
 * (=)                          # 5
 */
import reg from '../source/es6/reg.js'

console.log(reg.toString())
console.log("(?:(^\\s*(?<!\\.)\\b\\w+\\b)((?:\\s*(?<!\\.)\\b\\w+\\b)*)\\s*(=)|(?:(?<!\\.)\\b\\w+\\b)((?:\\s*(?<!\\.)\\b\\w+\\b)*)\\s*(=)|((?:\\s*(?<!\\.)\\b\\w+\\b)*)\\s*(=))")
