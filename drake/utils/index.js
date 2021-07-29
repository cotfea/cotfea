
const gitRawJson = async url => {

  const res = await fetch(url)

  const objByteArr = await
    res.body
    .getReader()
    .read()

  const {
    done
  , value
  } = objByteArr

  if (done) {
    return
  }

  return value
  .reduce(
    (r, c) => [
      ...r
    , String.fromCharCode(c)
    ]
  , []
  )
  .join('')

}

const jsonParse = str =>
  JSON.parse(
    str.replace(/.*\/\/.*\n/g, '')
    .replace(/,(?=\n.*[}|\]])/g, '')
  )

export {
  gitRawJson
, jsonParse
}
