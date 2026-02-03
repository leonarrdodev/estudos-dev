# Exercício 03: Monitor de Progresso de Upload

## Contexto
Você precisa construir uma CLI (Command Line Interface) que migra um banco de dados local para a nuvem. O arquivo é grande e o usuário precisa saber se o processo travou ou se está andando.

## Requisitos
1. **Setup:** Gere um arquivo dummy de 20MB chamado `backup.tmp`.
2. **Metadados:** Antes de ler, use `statSync` para descobrir o tamanho total do arquivo em bytes.
3. **Leitura (Stream):** Leia o arquivo usando `createReadStream`.
4. **Cálculo:** A cada chunk recebido:
   - Some o tamanho do chunk ao total processado.
   - Calcule a porcentagem concluída: `(totalLido / tamanhoTotal) * 100`.
5. **Visualização:** Exiba o progresso no console.
   - *Desafio:* Tente usar `process.stdout.write()` com `\r` para atualizar a mesma linha ao invés de pular linha com `console.log`.

## Cleanup
- Ao finalizar (evento `end`), apague o arquivo `backup.tmp`.