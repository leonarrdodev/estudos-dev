import { EventEmitter } from "node:events";
import fs from 'node:fs'

const dbLogs = fs.createWriteStream('db-logs.txt', {flags: 'a'})


//variaveis
const LOG_RECEIVED = 'log:received'
const LOG_ERROR = 'log:error'

//classe se torna um EventEmitter completo
class LogIngestor extends EventEmitter {

    constructor(){
        super()
        this.setMaxListeners(15)
    }

    ingest(logMessage: string){
        this.emit(LOG_RECEIVED, {logMessage})
    }

    close(){
        this.removeAllListeners()
    }
}


//uso da classe
const logIngestor = new LogIngestor()

//listeners
logIngestor.prependListener(LOG_RECEIVED, (data: {logMessage: string}) => {
    if(data.logMessage.includes('ERROR')){
        dbLogs.write(`[ALERTA CRITICO DETECTADO]\n`)
        logIngestor.emit(LOG_ERROR)
    }
})

logIngestor.on(LOG_RECEIVED, (data: {logMessage: string}) => {
    dbLogs.write(`[LOG]: ${data.logMessage}\n`)
})

process.on('SIGINT', () => {
    logIngestor.close()
    //Teste para verificar se listeners foram zerados
    //dbLogs.write(`Encerrando...\nListeners: LOG_ERROR: ${logIngestor.listenerCount(LOG_ERROR)}\nListeners: LOG_RECEIVED: ${logIngestor.listenerCount(LOG_RECEIVED)}`)
    dbLogs.close()
    process.exit(0)
})


//testes
logIngestor.ingest('ERROR ao inicializar')
logIngestor.ingest('Atualização recebida')

setTimeout(() => {}, 10000)