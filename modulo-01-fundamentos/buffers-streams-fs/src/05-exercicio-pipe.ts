import { createReadStream, createWriteStream, writeFileSync } from "node:fs"
import { createGzip } from "node:zlib"

const filePath = './input.txt'
const content = Buffer.alloc(10 * 1024 * 1024, '#')
writeFileSync(filePath, content)

const read = createReadStream(filePath)
const gzip = createGzip()
const write = createWriteStream('./output.txt.gz')

console.log('Compactação iniciada...')

read.pipe(gzip).pipe(write)

write.on('finish', () => {
    console.log('Compactação concluida com sucesso')
})