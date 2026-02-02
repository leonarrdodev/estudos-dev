# Event Emitter & Padrão Observer no Node.js

## Resumo do Módulo
Este módulo explora a implementação nativa do padrão **Observer** no Node.js através da classe `EventEmitter`. Fundamental para a arquitetura assíncrona e orientada a eventos da plataforma.

## Conceitos Dominados
- **Pattern Observer vs Pub/Sub**: Diferenças arquiteturais e casos de uso.
- **EventEmitter API**: Uso de `.on()`, `.emit()`, `.once()` e tipagem com TypeScript.
- **Ciclo de Vida**: Manipulação da ordem de execução com `.prependListener()` e limpeza com `.off()`.
- **Gestão de Memória**: Prevenção de *Memory Leaks*, uso de `setMaxListeners` e monitoramento com `listenerCount`.
- **Integração de Sistema**: Manipulação de sinais do OS (`SIGINT`), eventos do `process` e Streams (`fs`).
- **Arquitetura**: Criação de classes que estendem `EventEmitter` para construir módulos reativos.

## Como rodar o Projeto Final (Log Ingestor)

1. Navegue até a pasta do projeto.
2. Execute via `ts-node`:
   ```bash
   npx ts-node src/final-boss.ts