const parseText = ({
  text 
, parseTextToken
}) =>

    // IParsedToken[]
    text
    .split(/\r\n|\r|\n/)
    .reduce(

      (r, line, i) => {

        const handler = ({
          line: _line
        , currentOffset
        , result
        }) => {

          // console.log({
          //   line: _line
          // , result
          // })

          const openOffset = _line.indexOf('[', currentOffset)
          const closeOffset = _line.indexOf(']', openOffset)

          return openOffset === -1
          || closeOffset === -1
          ? result
          : handler((() => {

              const token = _line.substring(
                openOffset + 1
              , closeOffset
              )

              return {

                line: _line
              , currentOffset: closeOffset
              , result: (() => {

                  const tokenData = parseTextToken(token)

                  result.push({
                    line: i
                  // , token
                  , startCharacter: openOffset + 1
                  , length: closeOffset - openOffset - 1
                  , tokenType: tokenData.tokenType
                  , tokenModifiers: tokenData.tokenModifiers
                  })

                  return result

                })()
              }
          })())
        }

        return [
          ...r
        , ...handler({
            line
          , currentOffset: 0
          , result: []
          })
        ]
      }
    , []
    )

export default parseText
