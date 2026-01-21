# Exercício 01 - HTTP Response Genérico

## Objetivo
Refatorar uma função de resposta HTTP para torná-la "type-safe" utilizando Generics.

## O Problema
Atualmente, a função `createHttpResponse` aceita `any` no corpo da resposta. Isso significa que quem consome essa função não sabe o formato dos dados retornados, aumentando o risco de bugs.

## Requisitos
1. Crie uma interface chamada `User` com `id` (number) e `name` (string).
2. Crie uma função chamada `createHttpResponse<T>` que aceite:
   - `data`: do tipo T.
   - `status`: do tipo number.
3. A função deve retornar um objeto com a estrutura:
   ```ts
   {
       data: T;
       status: number;
       timestamp: Date;
   }
4. Teste a função criando duas respostas:

   - Uma de sucesso contendo um objeto User.

   - Uma de erro contendo apenas uma string (ex: "Access Denied").

5. Tente acessar uma propriedade inexistente no resultado da resposta de sucesso para ver se o TypeScript acusa erro.


**2. Execução**

* Crie o arquivo de código: `src/exercise-01.ts`
* Implemente a solução baseada no enunciado acima.
* **Dica:** Lembre-se que o `<T>` vai logo após o nome da função e antes dos parênteses dos argumentos.

---