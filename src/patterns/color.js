const color = {

  /* 
   * [comment] [string] [keyword] [number] [regexp] [operator] [namespace]
   * [type] [struct] [class] [interface] [enum] [typeParameter] [function]
   * [method] [macro] [variable] [parameter] [property] [label]
  */

  // comment.block.coffee
  // comment.line.number-sign.coffee
  comment: 'comment.block.coffee'

, bracket: 'storage.type.annotation.coffee'

  // constant.language.boolean.false.coffee
  // constant.language.boolean.true.coffee
, boolean: 'constant.language.boolean.true.coffee'
, null: 'constant.language.null.coffee'

, string: 'string.quoted.script.coffee'
, number: 'constant.numeric.decimal.coffee'
, regexp: ''

, variable: ''
, constant: 'constant.language.coffee'
, operator: 'keyword.control.coffee'
, keyword: ''

, namespace: ''
, label: ''

, enum: ''
, type: ''
, typeParameter: ''

, struct: ''
, class: 'support.variable.coffee'
// , klass: 'storage.type.function.coffee'
, interface: ''

, function: ''
, method: ''
, macro: ''
, parameter: ''
, property: ''
, funcCall: 'meta.function-call.coffee'

, inKeyword: 'variable.language.coffee'
, inObjFunc: 'support.function.console.coffee'

, error: 'invalid.illegal.identifier.coffee'
}

export default color
