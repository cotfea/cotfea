const include = repo => ({
  include: repo
})

const patternsWapper = patterns => ({
  patterns
})

const patternsPeer = args => {

  const {
    sign = {}
  , color = {}
  } = args

  const name =
    Object.keys(args)
    .includes('name')
    ? { name: args.name }
    : {}

  const options =
    Object.keys(args)
    .includes('options')
    ? args.options
    : {}

  const checkBE = args => {
    const keys = Object.keys(args)

    return keys.includes('begin')
    || keys.includes('end')
    ? true
    : false
  }

  // assign undefiend
  const assud = ({
    ck
  , obj
  }) =>
    ck
    ? obj
    : undefined

  const ensureBE = be =>
    checkBE(be)
    ? {
      ...assud({
      ck: be.begin
    , obj: { begin: be.begin } 
    })
    , ...assud({
      ck: be.end
    , obj: { end: be.end } 
    })
    }
    : {
      begin: be
    , end: be
    }

  const ensure = {
    sign: ensureBE(sign)
  , color: ensureBE(color)
  }

  return {
    ...name

  , ...assud({
      ck: ensure.sign.begin
    , obj: {
        begin: ensure.sign.begin
      }
    })

  , ...assud({
      ck: ensure.color.begin
    , obj: {
        beginCaptures: {
          0: {
            name: ensure.color.begin
          }
        }
      }
    })

  , ...assud({
      ck: ensure.sign.end
    , obj: {
        end: ensure.sign.end
      }
    })

  , ...assud({
      ck: ensure.color.end
    , obj: {
        endCaptures: {
          0: {
            name: ensure.color.end
          }
        }
      }
    })

  , ...options
  }
}

export {
  include
, patternsWapper
, patternsPeer
}
