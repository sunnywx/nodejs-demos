import url from "node:url"

const __filename=url.fileURLToPath(import.meta.url)
const __dirname=url.fileURLToPath(new URL('.', import.meta.url))

console.log('__filename: ', __filename)
console.log('__dirname: ', __dirname)