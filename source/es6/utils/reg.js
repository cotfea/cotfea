/***
 * Regex
 * oniguruma:
 *  https://raw.githubusercontent.com/kkos/oniguruma/master/doc/RE
 * tools:
 *  https://regex101.com/
 *  https://www.debuggex.com/
 * 
 * Scope Naming:
 *  https://www.sublimetext.com/docs/3/scope_naming.html
*/
const join = arr => arr.join('')

const id = (content) => content

const Reg = (function() {

  const Reg_ = function() {
    this.sReg = ''
    this.cbFunc = id
    this.cb = function(content) {
      const r = this.cbFunc(content)
      this.cbFunc = id 
      return r
    }
    this.wrapper()
    return this
  }

  const checkContent = isFunc => {
    return typeof isFunc === 'string'
    || Array.isArray(isFunc)
    ? isFunc
    : isFunc.toString()
  }

  Reg_.prototype.pipe = function(content) {
    this.sReg = join([this.sReg, checkContent(content)])
    return this
  };

  Reg_.prototype.arrPipe = function(content) {
    return this.pipe(this.cb(
      typeof content === 'function'
      ? content(new Reg())
      : Array.isArray(content)
      ? content.reduce(
          (r, c) =>
            typeof c === 'function'
            ? c(r)
            : r.pipe(c)
        , new Reg() 
        )
      : join(checkContent(content))
    ))
  }

  Reg_.prototype.or = function(content) {
    return this.arrPipe(['|', checkContent(content)])
  }

  const group = content => `(${checkContent(content)})`

  const useBy =
    byName =>
    content =>
    group(join([byName, content]))

  Reg_.prototype.wrapper = function() {

    const wrapper =
      action =>
      content =>
      this.pipe(action(checkContent(content)))

    const conf = {
      unGroup: ':'
    , atomicGroup: '>'

    , followedBy: '='
    , notFollowedBy: '!'
    , precededBy: '<='
    , notPrecededBy: '<!'
    }

    this.group = function(content) {
      return content === undefined
      ? (function() {
          this.cbFunc = group
          return this
        })
        .bind(this)()
      : wrapper(group)(content)
    }

    return Object.keys(conf).forEach(c => {
      this[c] = wrapper(useBy(`?${conf[c]}`))
      return this
    })
  }

  Reg_.prototype.toString = function() {
    return this.sReg
  }

  return Reg_
})()

export {
  Reg
}
