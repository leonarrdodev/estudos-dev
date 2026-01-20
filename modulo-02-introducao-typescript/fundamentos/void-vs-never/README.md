# void vs never

Este estudo explora as diferenças entre os tipos `void` e `never` em TypeScript,
que apesar de parecerem semelhantes, representam conceitos **muito diferentes**
no controle de fluxo da aplicação.

---

## `void`

O tipo `void` é utilizado para indicar que uma função **não retorna um valor**.

Isso não significa que a função não faça nada, mas sim que seu objetivo é
executar efeitos colaterais, como:

- registrar logs
- iniciar serviços
- disparar eventos

Exemplo comum:
- funções de inicialização
- funções de logging

---

## `never`

O tipo `never` indica que uma função **nunca chega ao fim da sua execução**.

Isso acontece quando a função:
- lança um erro (`throw`)
- entra em um loop infinito
- encerra o fluxo de execução de forma definitiva

O TypeScript utiliza `never` para entender que **o código após essa função
não será executado**.

---

## Diferença conceitual

- `void` → a função executa e termina
- `never` → a função executa e **não termina**

Confundir esses dois tipos pode gerar erros de lógica e dificultar
o entendimento do fluxo da aplicação.

---

## Objetivo deste estudo

Demonstrar, através de exemplos práticos, como `void` e `never`
afetam o controle de fluxo e a segurança do código em TypeScript.
