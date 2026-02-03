import { createReadStream, statSync, unlinkSync, writeFileSync } from "node:fs"

const filePath = './backup.tmp'
const content = Buffer.alloc(20 * 1024 * 1024, 'L')
writeFileSync(filePath, content)
const fullSize = statSync(filePath).size

const stream = createReadStream(filePath)

let totalProcessed = 0

stream.on('data', (chunk: Buffer) => {
    totalProcessed += chunk.length
    const percentage = (totalProcessed / fullSize) * 100

    process.stdout.write(`\r${percentage.toFixed(2)}%`)
})

stream.on('end', () => {
    console.log('\nFinalizado')
    unlinkSync(filePath)
})

stream.on('error', (error) => {
    console.log('Erro ao ler arquivo', error.message)
    unlinkSync(filePath)
})