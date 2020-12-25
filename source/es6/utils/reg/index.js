import Reg from './reg.js'

const Regex = (function() {

  const Regex_ = function() {
    this.reg = Reg.createReg()
    return this
  }

  Regex_.prototype.pipe = function(content) {
    return this
  }

  Regex_.prototype.or = function(content) {
    return this
  }

  Regex_.prototype.group = function(content) {
    return this
  }

  return Regex_

})()
