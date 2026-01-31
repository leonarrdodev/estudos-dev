# Exercício 01: Sistema de Notificação de Pedidos

## Objetivo
Criar um sistema desacoplado onde a criação de um pedido dispara múltiplos processos (Envio de E-mail e Atualização de Estoque) utilizando o `EventEmitter`.

## Requisitos Técnicos
1. Crie um arquivo `src/order-system.ts`.
2. Utilize a classe `EventEmitter` nativa do Node.js.
3. Defina um evento chamado `order:created`.
4. O evento deve carregar um objeto com: `orderId` (string) e `amount` (number).
5. Implemente dois Listeners:
   - **Email Service**: Deve printar "Enviando e-mail para o pedido [ID]...".
   - **Inventory Service**: Deve printar "Baixando estoque para o pedido [ID] no valor de R$ [VALOR]".
6. Emita o evento simulando a criação de um pedido.