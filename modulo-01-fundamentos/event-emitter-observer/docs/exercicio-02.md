# Exercício 02: Ciclo de Vida do Monitoramento

## Objetivo
Implementar um monitor de servidor que trate eventos de inicialização, erros críticos e métricas temporárias utilizando métodos avançados do `EventEmitter`.

## Requisitos Técnicos
1. **Inicialização Única (`once`)**:
   - Crie um evento `server:init`.
   - O listener deve logar "Servidor iniciado e pronto." apenas na primeira vez que for emitido.

2. **Tratamento de Erros (`on` e `prependListener`)**:
   - Crie um evento `server:error` que receba uma string (mensagem).
   - Adicione um listener padrão (`on`) que logue: "Log de Erro: [mensagem]".
   - Adicione um listener prioritário (`prependListener`) que logue: "⚠️ ALERTA CRÍTICO DETECTADO!".
   - *Resultado esperado:* O alerta crítico deve aparecer no console **antes** do log de erro normal.

3. **Métrica Temporária (`off`)**:
   - Crie um evento `server:tick`.
   - Defina uma **função nomeada** (ex: `tempMonitor`) que logue "Processando tick...".
   - Registre essa função com `.on`.
   - Emita o evento `server:tick` duas vezes.
   - Remova o listener usando `.off` ou `.removeListener`.
   - Emita mais uma vez para garantir que parou de logar.