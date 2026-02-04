# Exercício 04: Custom Writable Stream (Logger)

## Contexto
Você precisa criar um componente de sistema que receba streams de dados de qualquer fonte (arquivo, requisição, string) e faça o "output" no console, mas formatado como um log oficial.

## Requisitos
1. **Herança:** Crie uma classe chamada `LogStream` que estenda a classe nativa `Writable` (`node:stream`).
2. **Implementação:** Implemente o método obrigatório `_write(chunk, encoding, callback)`.
   - Converta o `chunk` (buffer) para string.
   - Adicione o prefixo `[SYSTEM] ` e o timestamp atual antes da mensagem.
   - Exiba no console (`console.log`).
   - **Importante:** Chame o `callback()` ao final para avisar a stream que você terminou de processar aquele pedaço e está pronto para o próximo.
3. **Teste:**
   - Instancie sua classe.
   - Use `process.stdin.pipe(suaStream)` para testar.
   - Digite algo no terminal e dê Enter para ver se o log aparece formatado.

## Dica
A assinatura do método `_write` é fixa:
`_write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void`