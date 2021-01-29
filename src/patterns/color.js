const color = {

  // comment
  //  - comment.block.coffee
  //  - comment.line.number-sign.coffee
  // 注释
  comment: 'comment.block.coffee'

  // language - constant.language.coffee
  // constant
  // null - constant.language.null.coffee
  // boolean
  //  - constant.language.boolean.false.coffee
  //  - constant.language.boolean.true.coffee
  // char
  // regex
  // numeric
  //    binary - constant.numeric.binary.coffee
  //    decimal - constant.numeric.decimal.coffee
  //    hex - constant.numeric.hex.coffee
  //    octal - constant.numeric.octal.coffee
  // 常量
, constant: 'constant.language.coffee'

  // control - keyword.control.coffee
  // operateor - keyword.operator.coffee
  // 操作符 控制结构
, operator: 'keyword.control.coffee'

  // array
  // object
  // function
  // 函数调用
, funcCall: 'meta.function-call.coffee'

  // bracket
  //  - punctuation.definition.parameters.begin.bracket.round.coffee
  //  - punctuation.definition.parameters.end.bracket.round.coffee
  // 括号
, bracket: 'storage.type.annotation.coffee'

  // variable
  //  - super 
  //  - this
  //  - arguments
  //  - extends
  // 内置关键字
, inKeyword: 'variable.language.coffee'

  // function
  // console
  // 内置对象及其函数调用
, inObjFunc: 'support.function.console.coffee'

  // support
  //  class - support.class.coffee
  //  variable - support.variable.coffee
  // 内置关键字
, class: 'support.variable.coffee'

  // storage
  //  - storage.type.annotation.coffee
  //  - storage.type.class.coffee
  //  - storage.type.function.coffee
  // 类型类
, klass: 'storage.type.function.coffee'

  // invalid
  // illegal
  // identifier
, error: 'invalid.illegal.identifier.coffee'

  // string
  //  - punctuation.definition.string.begin.coffee
  //  - punctuation.definition.string.end.coffee
  //  - string.quoted.script.coffee
  //  - string.quoted.single.coffee
  //  - string.quoted.double.coffee
  //  - string.quoted.single.heredoc.coffee
  //  - string.quoted.double.heredoc.coffee
, string: 'string.quoted.script.coffee'

  // constant.numeric.binary.coffee
  // constant.numeric.decimal.coffee
  // constant.numeric.hex.coffee
  // constant.numeric.octal.coffee
, numeric: 'constant.numeric.decimal.coffee'

  // constant.language.boolean.false.coffee
  // constant.language.boolean.true.coffee
, boolean: 'constant.language.boolean.true.coffee'

, null: 'constant.language.null.coffee'
}

export default color
