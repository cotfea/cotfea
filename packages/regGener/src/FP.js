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

const createReg = arg =>
  arg?.cache !== undefined
  ? {
    cache: arg.cache
  }
  : {
    cache: ''
  }

const regString = ({
  reg: {
    cache
  }
}) => cache

const pipeOne = ({
  reg: {
    cache
  }
, content
}) => ({
  cache: join([
    cache
  , typeof content !== 'string'
    ? regString({
        reg: content
      })
    : content
  ])
})

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

const wrapper =
  ({
    pre
  , post
  }) =>
  ({
    reg
  , content
  }) =>
    pipe({
      reg
    , content: [
        pre
      , ...(
        Array.isArray(content)
        ? content
        : [ content ]
        )
      , post
      ]
      .reduce(
        (r, c) =>
          [
            ...r
          , typeof c !== 'string'
            ? regString({
                reg: c
              })
            : c
          ]
      , []
      )
      .join('')
    })

const group = wrapper({
  pre: '('
, post: ')'
})

const oneOf = wrapper({
  pre: '['
, post: ']'
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
            , ...(
              Array.isArray(content)
              ? content
              : [ content ]
              ) 
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
, oneOf
, ...groupBy
}

export default Reg

export {
  apiKeys
}
