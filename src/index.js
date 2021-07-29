import { __ } from '../drake/utils/dirname.js'
import {
  include
, patternsWapper
} from './patterns/utils/util.js'

import comment_multiLine from './patterns/comment.multiLine.js'
import comment_oneLine from './patterns/comment.oneline.js'

import numbers from './patterns/numbers.js'
import operators from './patterns/operators.js'

import bracket from './patterns/bracket.js'
import string from './patterns/string.js'

import method from './patterns/method.js'

const tmLanguageConfig = {
  name: 'CoTFea'
, scopeName: 'source.cotfea'
, ...patternsWapper([

    ...bracket
  , ...string

  , comment_multiLine
  , comment_oneLine

  , method

  , include("#numbers")
  , include("#operators")

  ])
, repository: {

    numbers: patternsWapper(numbers)
  , operators: patternsWapper(operators)

  }
}

export default tmLanguageConfig
