import Reg, { apiKeys } from './reg.js'

const id = content => content

const Regex = (function() {

  const Regex_ = function(reg) {
    reg?.cache
    ? this.reg = reg
    : this.reg = Reg.createReg()
    this.cb = id
    return this
  }

  const contentToStr = (content) => {

    const InstanceToStr = (content) => {
      return typeof content !== 'string'
      ? content instanceof Regex
        ? content.toString()
        : content.cache !== undefined
        ? Reg.regString({
            reg: content
          })
        : content
      : content
    }

    return Array.isArray(content)
    ? content.reduce(
        (r, c) =>
          [
            ...r
          , InstanceToStr(c)
          ]
      , []
      )
    : InstanceToStr(content)
  }

  Regex_.prototype.pipe = function(content) {

    this.reg = //this.cb(
        Reg.pipe({
        reg: this.reg
      , content: contentToStr(content)
      })
    //)

    return this
  }

  // Object.keys(apiKeys)
  // .forEach(
  //   c =>

  //     Regex_.prototype[c] = function(content) {

  //       return content === undefined

  //       ? (function() {

  //           const newRegex = new Regex()

  //           newRegex.cb = ({
  //             reg
  //           }) => {

  //             this.reg.cache = Reg.regString({
  //               reg: Reg[c]({
  //                 reg: {
  //                   ...reg
  //                 , cache: ''
  //                 }
  //               , content: contentToStr(reg)
  //               })
  //             })

  //             return this
  //           }

  //           return newRegex

  //         }).bind(this)()

  //       : (function() {

  //           this.reg = Reg[c]({
  //             reg: this.reg
  //           , content: contentToStr(content)
  //           })

  //           return this

  //         }).bind(this)()

  //     }
  // )

  Regex_.prototype.toString = function() {
    return Reg.regString({
      reg: this.reg
    })
  }

  return Regex_

})()

export default Regex
