import { EventEmitter } from "node:events";

const monitorEvents = new EventEmitter()

const SERVER_INIT = 'server:init'
const SERVER_ERROR = 'server:error'
const SERVER_TICK = 'server:tick'

//Listeners
//Inicia o servidor - roda somente uma vez
monitorEvents.once(SERVER_INIT, () => {
    console.log('Servidor iniciado e pronto')
})

//listeners de erro - teste pratico do funcionamento do prependListener
monitorEvents.on(SERVER_ERROR, (message: string) => {
    console.log(`Log de Erro: ${message}`)
})

monitorEvents.prependListener(SERVER_ERROR, (message: string) => {
    console.log(`ALERTA CRITICO DETECTADO: ${message}`)
})


//listener temporario
const tempMonitor = () => {
    console.log('Processando tick...')
}

monitorEvents.on(SERVER_TICK, tempMonitor)

//Disparos de eventos
monitorEvents.emit(SERVER_INIT)
monitorEvents.emit(SERVER_ERROR, 'Erro ao iniciar')
monitorEvents.emit(SERVER_TICK)
monitorEvents.off(SERVER_TICK, tempMonitor)
monitorEvents.emit(SERVER_TICK) //não sera executado