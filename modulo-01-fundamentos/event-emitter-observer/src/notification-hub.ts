import { EventEmitter } from "node:events";

const notificationHub = new EventEmitter()

const NEW_NOTIFICATION = 'notification:new'

notificationHub.setMaxListeners(25)

for(let i = 0; i < 20; i++){
    notificationHub.on(NEW_NOTIFICATION, () => {
        console.log(`Rodando evento pela: ${i+1}x`)
    })
}

notificationHub.emit(NEW_NOTIFICATION)

notificationHub.removeAllListeners(NEW_NOTIFICATION)
console.log('Removendo listeners...')
console.log(`Listeners ativos: ${notificationHub.listenerCount(NEW_NOTIFICATION)}`)