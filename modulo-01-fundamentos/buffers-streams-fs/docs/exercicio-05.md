# Exercício 05: Compactador de Arquivos (Zlib Pipe)

## Contexto
Sua aplicação precisa gerar backups compactados de logs antigos para economizar espaço em disco. Como os logs podem ter gigabytes, você não pode ler tudo para a memória antes de compactar.

## Requisitos
1. **Setup:** Gere um arquivo de texto dummy de ~10MB (chamado `input.txt`).
2. **Streams:**
   - Crie uma `ReadStream` para ler o `input.txt`.
   - Crie uma `TransformStream` de compressão usando `zlib.createGzip()` (nativo do Node).
   - Crie uma `WriteStream` para salvar em `output.txt.gz`.
3. **Pipeline:** Conecte as pontas: `Leitura -> Compressão -> Escrita`.
4. **Monitoramento:**
   - Exiba "Compactação iniciada..."
   - Quando a escrita terminar (evento `finish` na stream de destino), exiba "Compactação concluída com sucesso!".

## Dica
O método `.pipe()` retorna a stream de destino, permitindo encadeamento:
`source.pipe(transform).pipe(destination)`