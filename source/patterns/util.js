const patternsWapper = patterns => {
  patterns
}

const patternsPeer = ({
  name = ''
, sign = {}
, color = {}
}) => {

  const _color =
    typeof color !== 'string'
    ? color
    : {
      begin: color
    , end: color
    }

  const _sign =
    typeof sign !== 'string'
    ? sign
    : {
      begin: sign
    , end: sign
    }

  return {
    name
  , begin: _sign.begin
  , beginCaptures: {
      0: {
        name: _color.begin
      }
    }
  , end: _sign.end
  , endCaptures: {
      0: {
        name: _color.end
      }
    }
  }
}

export {
  patternsWapper
, patternsPeer
}
