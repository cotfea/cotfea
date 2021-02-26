import { __ } from './util.js'
import {
  include
, patternsWapper
} from './patterns/util.js'

import comment_multiLine from './patterns/comment.multiLine.js'
import comment_oneLine from './patterns/comment.oneline.js'

import numbers from './patterns/numbers.js'
import operators from './patterns/operators.js'

import bracket from './patterns/bracket.js'
import string from './patterns/string.js'

const tmLanguageConfig = {
  name: 'CoTFea'
, scopeName: 'source.cotfea'
, ...patternsWapper([

    ...bracket
  , ...string

  , comment_multiLine
  , comment_oneLine

  , include("#numbers")
  , include("#operators")

  ])
, repository: {

    numbers: patternsWapper(numbers)
  , operators: patternsWapper(operators)

  }
}

export default tmLanguageConfig
