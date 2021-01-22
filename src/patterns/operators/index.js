import Reg from "../../../packages/regGener/src/index.js"

const pattern = [
  {
    match:
      // (?:
      //    ([a-zA-Z$_][\\w$]*)?
      //    \\s+
      // |
      //    (?<![\\w$])
      // )
      // (and=|or=)
      Reg.unGroup()
      .or([
        Reg.pipe([
          Reg
          .group(
            Reg
            .oneOf([
              'a-z'
            , 'A-Z'
            , '$_'
            ])
            .oneOf([
              '\\w'
            , '$'
            ])
            .pipe('*')
          )
        , '?'
        , '\\s+'
        ])
      , Reg.notPrecededBy()
        .oneOf([
          '\\w'
        , '$'
        ])
      ])
      .group()
      .or([
        'and='
      , 'or='
      ])
      .toString()
  , captures: {
      1: {
        name: 'variable.assignment.coffee'
      }
    , 2: {
        name: 'keyword.operator.assignment.compound.coffee'
      }
    }
  }
]

export default pattern
