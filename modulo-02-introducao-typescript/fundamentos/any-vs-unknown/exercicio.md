# Exercício Guiado — Safe Parser com `unknown`

## Objetivo

Entender como o tipo `unknown` funciona em TypeScript e por que ele é mais seguro que `any`,
forçando a validação do tipo antes do uso.

---

## Passo 1 — Preparação

Crie um arquivo chamado: safe-parser.ts


---

## Passo 2 — A Função Segura

Crie uma função chamada `analisarInput` com as seguintes regras:

- Recebe um parâmetro chamado `dado`
- O tipo do parâmetro deve ser `unknown`
- A função não precisa retornar nada (`void`)

Assinatura esperada:
```ts
function analisarInput(dado: unknown): void
```
## Passo 3 — A Tentativa Falha (Teste de Segurança)
Dentro da função, tente acessar a propriedade abaixo:

```ts
console.log(dado.length)
```

⚠️ O TypeScript irá sinalizar um erro, pois:

Ele não sabe se dado possui a propriedade length.

👉 Comente essa linha, mas não apague.
Ela serve para mostrar o bloqueio de segurança do unknown.

## Passo 4 — Tratamento Correto (Type Narrowing)
Agora, trate o valor corretamente usando if / else if.

Regras:
Se o dado for uma string

Imprima:
```ts
É texto com tamanho: [tamanho da string]
```
Aqui o TypeScript permitirá o uso de .length.

Se o dado for um number

Imprima:
```ts
É número com valor: [valor]
```
Caso contrário

Imprima:
```
Tipo não suportado
```
## Passo 5 — Execução
Chame a função analisarInput com os seguintes valores:

Uma string:

```ts
"Erro de conexão"
```
Um número:
```ts
404
```
Um boolean:
```ts
true
```
O último caso deve cair no else, confirmando que o tratamento está funcionando corretamente.