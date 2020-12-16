
// const checkContent = ({
//   regObj
// , regType
// , content
// }) =>
//   arg === undefined
//     || arg === null
//     || arg === ''
//   ? content
//   : typeof content === 'function'
//   ? content(regObj)
//   : content instanceof regType
//   ? content.toString()
//   : content

const Reg = (function() {

  const Reg_ = function(arg) {

    // return this instanceof Reg

    // ? (function(){
    this.sReg = ''
    // this.cbFunc = id
    this.cb = {
      dft: id
    , cb: function(content) {
        const r = this.cb.dft(content)
        this.cb.dft = id 
        return r
      }
    }
    this.groupBy()
    return this
      // }).bind(this)()

    // : (function(){
    //     const reg = new Reg()
    //     return arg === undefined
    //     || arg === null
    //     ? reg
    //     : Array.isArray(arg)
    //     ? reg.arrPipe(arg)
    //     : reg.pipe(arg)
    //   })()
  }

  Reg_.prototype.pipe = function(content) {
    this.sReg = pipe({
      cache: this.sReg
    , content
    , cb: content =>
        this.cb(checkContent({
          content
        }))
    })
    return this
  }

  Reg_.prototype.arrPipe = function(content) {
    return this.pipe(
      typeof content === 'function'
      ? content(new Reg())
      : Array.isArray(content)
      ? content.reduce( // join(content)
          (r, c) =>
            typeof c === 'function'
            ? c(r)
            : r.pipe(c)
        , new Reg() 
        )
      : content
    )
  }

  Reg_.prototype.or = function(content) {
    const defAct = function(){
      return this.arrPipe(['|', content])
    }
    return Array.isArray(content)
      && content.length !== 1
    ? this.arrPipe(content.join('|'))
    : defAct.bind(this)()
  }

  Reg_.prototype.group = function(content) {
    return this.arrPipe([
      '(' , content , ')'
    ])
  }

  // const group = content => `(${checkContent(content)})`

  // const useBy =
  //   byName =>
  //   content =>
  //   group(join([byName, content]))

  Reg_.prototype.groupBy = function() {

    // const wrapper = action => content =>
    //   content === undefined
    //   ? (function() {

    const lazyWapper = function() {
      this.cbFunc = action
      return this
    }

      //   })
      //   .bind(this)()
      // : this.pipe(action(content))

    return Object.keys(apiKeys)
    .forEach(c => {
      this[c] = function(content) {

        const action = function(content) {
          return this.group(
            '?'
          , apiKeys[c]
          , content
          )
        }

        return content === undefined
        || content === null
        ? lazyWapper.bind(this)()
        : action.bind(this)(content)
      }

      return this
    })
  }

  Reg_.prototype.toString = function() {
    return this.sReg
  }

  return Reg_
})()

// Object.keys(
//   apiKeys
// )
// .concat([
//   'or'
// ])
// .forEach(
//   c => {
//     Reg[c] = arg =>
//       (
//         new Reg()
//       )[c]()[
//         Array.isArray(arg)
//         ? 'arrPipe'
//         : 'pipe'
//       ](checkContent(arg))
//   }
// )

export {
  Reg
}
