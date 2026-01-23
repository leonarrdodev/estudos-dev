# Exercício 02 - Constraints (Restrições)

## Objetivo
Criar uma função de atualização de banco de dados que aceite qualquer entidade, desde que ela possua um `id`.

## Requisitos
1. Defina uma interface chamada `BaseEntity` que tenha a propriedade `id` (do tipo `number`).
2. Crie uma interface `Product` que tenha `id`, `name` (string) e `price` (number).
3. Crie uma função genérica `updateRecord<T>` que:
   - Tenha uma restrição (constraint) obrigando `T` a ter as propriedades de `BaseEntity`.
   - Receba um argumento `record` do tipo `T`.
   - Imprima no console: "Atualizando registro [ID]...".
   - Retorne o próprio `record`.
4. Teste a função:
   - Crie um objeto do tipo `Product` e passe para a função.
   - Tente passar um objeto simples `{ name: "Mouse" }` (sem ID) e verifique se o TS bloqueia.