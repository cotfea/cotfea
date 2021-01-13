const dirname = () =>
  new URL(
    '.'
  , import.meta.url
  ).pathname

const filename = () =>
  new URL(
    ''
  , import.meta.url
  ).pathname

const __ = {
  filename
, dirname
}

export {
  __
}
