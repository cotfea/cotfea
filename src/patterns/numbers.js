import Reg from "../../packages/regGener/src/index.js"

const wrapper = content => {

  const pre = Reg.pipe([
    '\\b'
  , Reg.notPrecededBy(
      '\\$'
    )
  ])

  const post = Reg.pipe([
    '\\b'
  , Reg.notFollowedBy(
      '\\$'
    )
  ])

  return Reg.pipe([
    pre
  , content
  , post
  ])
}

const parttern = [{
    name: 'constant.numeric.hex.coffee'
  , match: wrapper(
      Reg.pipe(
        '0'
      )
      .group()
      .or([
          'x'
        , 'X'
      ])
      .oneOf(
        Reg.pipe([
          '0-9'
        , 'a-f'
        , 'A-F'
        ])
      )
    )
    .toString()
}]

export default parttern
