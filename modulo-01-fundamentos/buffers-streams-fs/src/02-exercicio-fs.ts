import {existsSync, writeFileSync } from "node:fs"
import { appendFile } from "node:fs/promises"

const filePath = './app.log'

//verifica se arquivo ja existe, se não, o cria
if(!existsSync(filePath)){
    writeFileSync(filePath, '--- LOG START ---\n', {flag: 'a'})
}


async function logMessage(msg: string) {
    const timestamp = new Date().toISOString()
    const line = `[${timestamp}] ${msg}\n`

    try{
        await appendFile(filePath, line, 'utf8')
        console.log(line)
    } catch(error){
        console.log('Erro ao salvar log', error)
    }

    
}

logMessage('Servidor subiu')
logMessage('Usuario X logou')
logMessage('Erro no DB')

console.log('Logs registrados')


