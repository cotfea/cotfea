const color = {

  /* 
   * [comment] [string] [keyword] [number] [regexp] [operator] [namespace]
   * [type] [struct] [class] [interface] [enum] [typeParameter] [function]
   * [method] [macro] [variable] [parameter] [property] [label]
  */

  // comment.block.coffee
  // comment.line.number-sign.coffee
  comment: 'comment.block.coffee'

  // constant.character.escape.backslash.coffee
  // constant.character.escape.backslash.regexp
, bracket: 'constant.character.escape.backslash.coffee'

  // constant.language.boolean.true.coffee
  // constant.language.boolean.false.coffee
, boolean: 'constant.language.boolean.true.coffee'
, null: 'constant.language.null.coffee'

, string: 'string.quoted.script.coffee'
, number: 'constant.numeric.decimal.coffee'
  // string.regexp.coffee
  // string.regexp.multiline.coffee
, regexp: 'string.regexp.coffee'

  // variable.language.coffee
  // variable.language.super.coffee
  // variable.language.this.coffee
  // variable.language.arguments.coffee
, variable: 'meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.constant.js'
, constant: 'support.constant.json.js'
  // keyword.operator.coffee
  // keyword.control.coffee
  // keyword.operator.new.coffee
, operator: 'constant.character.escape.backslash.coffee'
, keyword: 'keyword.operator.new.coffee'
, buildinKeyword: 'variable.language.coffee'
, buildinObjFunc: 'support.function.console.coffee'

// , namespace: 'support.variable.coffee'
// , label: 'support.variable.coffee'

// , enum: 'storage.type.class.coffee'
// , type: 'storage.type.class.coffee'
// , typeParameter: 'storage.type.annotation.coffee'

// , struct: 'storage.type.class.coffee'
// , class: 'support.variable.coffee'
// , klass: 'storage.type.function.coffee'
// , interface: 'storage.type.class.coffee'

, function: 'storage.type.function.coffee'
, method: 'storage.type.function.coffee'
// , macro: 'storage.type.function.coffee'
, parameter: 'variable.parameter.function.coffee'

  // variable.other.property.coffee
  // constant.other.property.coffee
, property: 'variable.other.property.coffee'

, funcCall: 'meta.function-call.coffee'

, error: 'invalid.illegal.identifier.coffee'
}

export default color
