# Exercício — void vs never

## Cenário

Neste exercício, você irá criar um pequeno script de inicialização
que **falha propositalmente**, com o objetivo de demonstrar a diferença
entre funções que **terminam normalmente** e funções que **nunca retornam**.

---

## Objetivo

- Entender quando usar `void`
- Entender quando usar `never`
- Observar como o TypeScript analisa o **controle de fluxo**
- Identificar código inalcançável (*unreachable code*)

---

## Função 1 — `initializeService`

### Objetivo
Simular o boot inicial do sistema.

### Regras
- Não recebe parâmetros
- Retorna `void`
- Apenas executa e termina

### Lógica esperada
- Imprimir no console:

```
Serviço iniciado...
```

---

## Função 2 — `fatalCrash`

### Objetivo
Encerrar o processo devido a um erro crítico.

### Regras
- Não recebe parâmetros
- O tipo de retorno deve ser `never`

### Lógica esperada
- Imprimir no console:
```
Erro crítico detectado. Encerrando...
```

Encerrar o processo utilizando o comando nativo do Node.js:
```ts
process.exit(1)
```
💡 Observação:
process.exit encerra o programa imediatamente.
O TypeScript entende que nada é executado após essa chamada.

Função Principal — main
Implemente uma função principal que:


- Chame initializeService()
- Chame fatalCrash()

Logo após, adicione:
```
console.log("Eu nunca serei exibido")
```
Observação Importante
Ao escrever a última linha do console.log, observe:

Se o editor (VS Code) deixa o código mais claro/cinza

Ou se o compilador acusa:

```
Unreachable code
```
Isso acontece porque o TypeScript sabe que uma função never
interrompe definitivamente o fluxo da aplicação.