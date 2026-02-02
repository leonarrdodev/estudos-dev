# Exercício 01: Binary Patching (Correção Binária)

## Contexto
Você recebeu um Buffer contendo uma mensagem de um sistema legado, mas uma parte da string está incorreta. Sua missão é manipular os bytes diretamente para corrigir a mensagem sem criar uma nova variável de string.

## Requisitos
1. Crie um Buffer inicial com a frase: `"I love Java"`.
2. Exiba no console o Buffer em formato Hexadecimal e a String original.
3. Utilize o método `.write()` ou alteração direta de índices (`buf[i] = x`) para substituir a palavra **"Java"** por **"Node"**.
4. Exiba a nova String corrigida.

## Restrições
* O tamanho do Buffer não pode ser alterado (ambas as palavras têm 4 letras, então cabe perfeitamente).
* Não vale criar um *novo* Buffer (ex: `Buffer.from("I love Node")`). Você deve alterar o existente.