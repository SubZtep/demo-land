const { readdirSync, writeFileSync } = require(`fs`)
const { EOL } = require(`os`)

const dirsToImport = [`components`, `shaders`, `systems`]

const importRow = (dir: string, file: string) => `import "../${dir}/${file}"`

writeFileSync(`dist/index.ts`, dirsToImport.flatMap(dir => readdirSync(dir).map(entry => importRow(dir, entry))).join(EOL))
