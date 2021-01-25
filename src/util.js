const dirname = (url) =>
  new URL(
    '.'
  , url
  ).pathname

const filename = () =>
  new URL(
    ''
  , url
  ).pathname

const __ = {
  filename
, dirname
}

export {
  __
}
