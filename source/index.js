import comment from './patterns/comment.multiLine.js'

const tmLanguageConfig = {
  name: 'CoTFea'
, scopeName: 'source.cotfea'
, patterns: [
    comment
  ]
}

Deno.writeTextFileSync(
  './tmLanguage.json'
, JSON.stringify(
    tmLanguageConfig
  , null, 2
  )
)
