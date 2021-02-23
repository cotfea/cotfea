import { __ } from './util.js'
import {
  include
, patternsWapper
} from './patterns/util.js'

import comment_multiLine from './patterns/comment.multiLine.js'
import comment_oneLine from './patterns/comment.oneline.js'

import quoted_string from './patterns/quoted_string.js'
import heredoc from './patterns/heredoc.js'

import brace_curly from './patterns/brace_curly.js'
import bracket_square from './patterns/bracket_square.js'
import brace_round from './patterns/brace_round.js'

import array_sign from './patterns/array_sign.js'

import numbers from './patterns/numbers.js'
import operators from './patterns/operators/index.js'

const tmLanguageConfig = {
  name: 'CoTFea'
, scopeName: 'source.cotfea'
, ...patternsWapper([

    comment_multiLine
  , comment_oneLine

  , include("#signle_quoted_string")
  , include("#double_quoted_string")

  , heredoc.single
  , heredoc.double

  , brace_curly
  , bracket_square
  , brace_round

  , array_sign

  , include("#numbers")
  , include("#operators")

  ])
, repository: {

    double_quoted_string:
      patternsWapper(quoted_string.double)
  , single_quoted_string:
      patternsWapper(quoted_string.single)

  , numbers: patternsWapper(numbers)
  , operators: patternsWapper(operators)

  }
}

Deno.writeTextFileSync(
  `${__.dirname(import.meta.url)}/tmLanguage.json`
, [
    JSON.stringify(
      tmLanguageConfig
    , null, 2
    )
  , '\n'
  ].join('')
)
