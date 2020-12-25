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

const apiKeys = {
  group: ''
, unGroup: ':'
, atomicGroup: '>'

, followedBy: '='
, notFollowedBy: '!'
, precededBy: '<='
, notPrecededBy: '<!'
}

const join = arrChar => arrChar.join('')

const createReg = () => ({
  cache: ''
, cb: id
})

const regString = ({
  reg: {
    cache
  }
}) => cache

const id = ({
  reg
, content
}) => ({
  reg
, content
})

const pipeOne = ({
  reg: {
    cache
  , cb
  }
, content
}) => cb({
  reg: {
    cache: join([
      cache
    , typeof content !== 'string'
      ? regString({
          reg: content
        })
      : content
    ])
  , cb: id
  }
}).reg

const pipeAll = ({
  reg
, content
}) =>
  content.reduce(
    (r, c) =>
      pipeOne({
        reg: r
      , content: c
      })
  , reg
  )

const pipe = (para) =>
  Array.isArray(para.content)
  ? pipeAll(para)
  : pipeOne(para)

const or = ({
  reg
, content
}) =>
  pipe({
    reg
  , content:
      Array.isArray(content)
      ? content.length !== 1
      ? content.join('|')
      : content[0]
      : [ '|', content ]
  })

const group = ({
  reg
, content
}) =>
  pipe({
    reg
  , content: [
      '('
    , content
    , ')'
    ]
  })

const groupBy = (() =>

  Object.keys(apiKeys)
  .reduce(

    (r, c) => ({
      ...r
    , [c]: ({
        reg
      , content
      }) =>
        group({
          reg
        , content: pipe({
            reg: createReg()
          , content: [
              c !== 'group'
              ? '?'
              : ''
            , apiKeys[c]
            , typeof content !== 'string'
              ? regString({
                  reg: content
                })
              : content
            ]
          })
        })
    })
  , {}
  )
)()

const Reg = {
  createReg
, regString
, pipe
, or
, ...groupBy
}

export default Reg

export {
  apiKeys
}
