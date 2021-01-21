import Reg, { apiKeys } from './FP.js'

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
      : typeof content === 'function'
      ? InstanceToStr(content(new Regex()))
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

  [
    'pipe'
  , 'or'
  , 'oneOf'
  ]
  .forEach(
    c =>
      Regex_.prototype[c] = function(content) {

        const reg = (
          Reg[c]({
            reg: Reg.createReg()
          , content: contentToStr(content)
          })
        )

        this.reg = Reg.pipe({
          reg: this.reg
        , content: contentToStr(this.cb(reg))
        })
        this.cb = id

        return this
      }
  )

  Object.keys(apiKeys)
  .forEach(
    c =>

      Regex_.prototype[c] = function(content) {

        return content === undefined

        ? (function() {

            this.cb = _content =>

              new Regex()[c](
                _content
              )

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
