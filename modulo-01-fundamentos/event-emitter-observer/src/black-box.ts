import fs from 'node:fs'

const logStream = fs.createWriteStream('system-logs.txt', {flags: 'a'})

logStream.write(`[INFO] Sistema iniciado em ${new Date().toDateString()}\n`)

process.on('SIGINT', () => {
    logStream.write('[INFO] Encerrado manualmente\n')
    // 0 - sucesso
    process.exit(0)
})

process.on('uncaughtException', (err: Error) => {
    logStream.write(`[CRASH] Erro não tratado: ${err.message}`)
    //1 - Erro
    process.exit(1)
})

setTimeout(() => {
    //throw new Error('Erro fatal da aplicação')
},3000)

