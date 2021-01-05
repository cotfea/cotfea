import Reg, { apiKeys } from './reg.js'

const id = content => content

const Regex = (function() {

  const Regex_ = function(reg) {
    reg !== undefined
    && Object.keys(reg) === ['cache']
    ? this.reg = reg
    : this.reg = Reg.createReg()
    this.cb = id
    return this
  }

  const contentToStr = (content) => {

    const InstanceToStr = (content) => {
      return typeof content !== 'string'
      && content instanceof Regex
      ? content.toString()
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

    console.log(this.cb.toString())

    this.reg = this.cb(
      Reg.pipe({
        reg: this.reg
      , content: contentToStr(content)
      })
    )

    this.cb = id

    return this
  }

  Object.keys(apiKeys)
  .forEach(
    c =>

      Regex_.prototype[c] = function(content) {

        return content === undefined

        ? (function() {

            this.cb = (that) => {

              return this
              .pipe(
                (new Regex())[c](that)
              )

            }

            return this

          }).bind(this)()

        : (function() {

            this.reg = Reg[c]({
              reg: this.reg
            , content: contentToStr(content)
            })

            return this

          }).bind(this)()

      }
  )

  Regex_.prototype.toString = function() {
    return Reg.regString({
      reg: this.reg
    })
  }

  return Regex_

})()

export default Regex
