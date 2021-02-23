const arrToMapValueIndex = arr =>
  arr.reduce(
    (p, c, i) => (
      {
        ...p
      , [c]: i
      }
    )
  , {}
  )

export {
  arrToMapValueIndex
}
