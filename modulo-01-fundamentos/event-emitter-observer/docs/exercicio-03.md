# Exercício 03: Controle de Vazamento de Memória

## Objetivo
Simular um cenário de alta concorrência de ouvintes, estourar intencionalmente o limite de segurança do Node.js e implementar a correção adequada.

## Requisitos Técnicos
1.  **Configuração do Hub**:
    -   Crie um `EventEmitter` chamado `notificationHub`.
    -   Defina o evento `notification:new`.

2.  **O Cenário de Erro (Teste de Stress)**:
    -   Crie um loop que itere 20 vezes.
    -   Dentro do loop, registre um ouvinte para `notification:new` (pode ser uma função simples `console.log`).
    -   Execute o código e observe o aviso `MaxListenersExceededWarning` no terminal (o padrão é 10).

3.  **A Correção (Escalabilidade)**:
    -   Utilize `setMaxListeners` para aumentar a capacidade do Hub para 25 ouvintes.
    -   Rode novamente e garanta que o aviso sumiu.

4.  **A Limpeza (Graceful Shutdown)**:
    -   Após o loop, emita o evento uma vez para provar que todos os 20 ouvintes estão funcionando.
    -   Utilize `removeAllListeners` para desconectar todos os ouvintes.
    -   Imprima no console o `listenerCount` final para confirmar que é 0.