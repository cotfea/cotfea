// (?:(^\s*(?<!\.)\b\w+\b)((?:\s*(?<!\.)\b\w+\b)*)\s*(=)|(?:(?<!\.)\b\w+\b)((?:\s*(?<!\.)\b\w+\b)*)\s*(=)|((?:\s*(?<!\.)\b\w+\b)*)\s*(=))

/***
 * (?:
 *    (^\s*(?<!\.)\b\w+\b)      # 1
 *    ((?:\s*(?<!\.)\b\w+\b)*)  # 2
 *    \s*
 *    (=)                       # 3
 * |  (?:(?<!\.)\b\w+\b)
 *    ((?:\s*(?<!\.)\b\w+\b)*)  # 4
 *    \s*
 *    (=)                       # 5
 * |  ((?:\s*(?<!\.)\b\w+\b)*)  # 6
 *    \s*
 *    (=)                       # 7
 * )
 */