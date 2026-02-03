import { createReadStream, statSync, unlinkSync, writeFileSync } from "node:fs"

const filePath = './backup.tmp'
//cria arquivo de 20mb
const content = Buffer.alloc(20 * 1024 * 1024, 'L')
writeFileSync(filePath, content)
//obtem o tamanho total do arquivo
const fullSize = statSync(filePath).size

//cria a stream de leitura
const stream = createReadStream(filePath)

let totalProcessed = 0

stream.on('data', (chunk: Buffer) => {
    totalProcessed += chunk.length
    const percentage = (totalProcessed / fullSize) * 100
    //exibe no console atualizando a mesma linha
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