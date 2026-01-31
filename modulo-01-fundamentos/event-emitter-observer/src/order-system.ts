import { EventEmitter } from 'node:events'

const myEmitter = new EventEmitter()

const CREATE_ORDER = 'order:created'

interface OrderCreatedPayload {
    orderId: string,
    amount: number
}

myEmitter.on(CREATE_ORDER, (data: OrderCreatedPayload) => {
    console.log(`Enviando email para o pedido [ID] ${data.orderId}`)
})

myEmitter.on(CREATE_ORDER, (data: OrderCreatedPayload) => {
    console.log(`Baixando estoque para o pedido [ID] ${data.orderId} no valor de R$ ${data.amount}`)
})

myEmitter.emit(CREATE_ORDER, {orderId: 'gt-54', amount: 29.90})