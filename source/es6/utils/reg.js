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

  const Reg_ = function(arg) {
    return this instanceof Reg
    ? (function() {
        this.sReg = ''
        this.cbFunc = id
        this.cb = function(content) {
          const r = this.cbFunc(content)
          this.cbFunc = id 
          return r
        }
        this.wrapper()
        return this
      }).bind(this)()
    : (function(){
        const reg = new Reg()
        return arg !== undefined
        && arg !== null
        && Array.isArray(arg)
        ? reg.arrPipe(arg)
        : arg(reg)
      })()
  }

  const checkContent = isFunc => {
    return typeof isFunc === 'string'
    || Array.isArray(isFunc)
    ? isFunc
    : isFunc.toString()
  }

  Reg_.prototype.pipe = function(content) {
    this.sReg = join([
      this.sReg
    , this.cb(checkContent(content))
    ])
    return this
  };

  Reg_.prototype.arrPipe = function(content) {
    return this.pipe(
      typeof content === 'function'
      ? content(new Reg())
      : Array.isArray(content)
      ? content.reduce(
          (r, c, i) =>
            typeof c === 'function'
            ? c(r)
            : r.pipe(c)
        , new Reg() 
        )
      : join(checkContent(content))
    )
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
        content === undefined
        ? (function() {
          this.cbFunc = action
          return this
        })
        .bind(this)()
      : this.pipe(action(checkContent(content)))

    const conf = {
      group: ''
    , unGroup: ':'
    , atomicGroup: '>'

    , followedBy: '='
    , notFollowedBy: '!'
    , precededBy: '<='
    , notPrecededBy: '<!'
    }

    return Object.keys(conf).forEach(c => {
      c === 'group'
      ? this[c] = wrapper(group)
      : this[c] = wrapper(useBy(`?${conf[c]}`))
      return this
    })
  }

  Reg_.prototype.toString = function() {
    return this.sReg
  }

  return Reg_
})()

Reg.group = function(arg) {
  return Array.isArray(arg)
  ? r => r
    .group()
    .arrPipe(arg)
  : r => r
    .group()
    .pipe(arg)
}

Reg.unGroup = function(arg) {
  return Array.isArray(arg)
  ? r => r
    .unGroup()
    .arrPipe(arg)
  : r => r
    .unGroup()
    .pipe(arg)
}

export {
  Reg
}
