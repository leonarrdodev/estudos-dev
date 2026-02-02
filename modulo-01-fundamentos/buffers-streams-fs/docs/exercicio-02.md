# Exercício 02: Sistema de Logs (Sync vs Async)

## Contexto
Você está construindo o módulo de auditoria de uma API.
1. Ao iniciar, o sistema deve garantir que o arquivo de log existe (Operação Bloqueante/Sync).
2. Durante a execução, o sistema deve registrar novas entradas de log sem travar a thread principal (Operação Não-bloqueante/Async).

## Requisitos
1. **Inicialização (Sync):** Verifique se o arquivo `app.log` existe. Se não existir, crie-o com um cabeçalho inicial: `"--- LOG START ---\n"`. Use `node:fs` (versão síncrona).
2. **Registro (Async):** Crie uma função `logMessage(msg: string)` que adiciona uma nova linha ao final do arquivo com o timestamp atual. Use `node:fs/promises`.
3. **Execução:**
   - Inicie o arquivo.
   - Registre 3 mensagens seguidas ("Servidor subiu", "Usuário X logou", "Erro no DB").
   - Exiba no console "Logs registrados!" *antes* ou *enquanto* as promises são resolvidas para provar o não-bloqueio.
   
## Dicas
- Use `appendFile` para não sobrescrever o arquivo.
- Use `new Date().toISOString()` para o timestamp.
- Lembre-se do `\n` para pular linha.