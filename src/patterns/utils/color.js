/* 
 * [comment] [string] [keyword] [number] [regexp] [operator] [namespace]
 * [type] [struct] [class] [interface] [enum] [typeParameter] [function]
 * [method] [macro] [variable] [parameter] [property] [label]
*/

/*
 * comment
 * bracket
 * function
 *  declare
 *  call
 * type
 *  boolean
 *  string
 *  number
 * keyword
 *  null
 *  NaN
 *  undefiend
 * operator
 */

const color = {

  comment: 'comment'

  // constant.character.escape.backslash.coffee
  // constant.character.escape.backslash.regexp
, bracket: 'constant.character.escape.backslash.coffee'

, variable: 'meta.object-binding-pattern-variable.js meta.definition.variable.js variable.other.constant.js'
, constant: 'support.constant.json.js'

, function: 'storage.type.function.coffee'
, method: 'meta.method-call.java meta.method'
// , macro: 'storage.type.function.coffee'

, type: {
    // constant.language.boolean.true.coffee
    // constant.language.boolean.false.coffee
    boolean: 'constant.language.boolean.true.coffee'
  , null: 'constant.language.null.coffee'

  , string: 'string.quoted.script.coffee'
  , number: 'constant.numeric.decimal.coffee'
    // string.regexp.coffee
    // string.regexp.multiline.coffee
  , regexp: 'string.regexp.coffee'
  // 'storage.type.annotation.coffee'
  , parameter: 'variable.parameter.function.coffee'

  // , enum: 'storage.type.class.coffee'
  // , struct: 'storage.type.class.coffee'
  // , interface: 'storage.type.class.coffee'
  }

, buildin: {
  // keyword.operator.new.coffee
    keyword: 'variable.language.coffee'
  , object: 'support.function.console.coffee'
  , function: 'support.function.console.coffee'
  , operator: 'constant.character.escape.backslash.coffee'
  }

// , namespace: 'support.variable.coffee'
// , label: 'support.variable.coffee'

// , class: 'support.variable.coffee'
// , klass: 'storage.type.function.coffee'


  // variable.other.property.coffee
  // constant.other.property.coffee
, property: 'variable.other.property.coffee'

, funcCall: 'meta.function-call.coffee'

, error: 'invalid.illegal.identifier.coffee'
}

export default color
