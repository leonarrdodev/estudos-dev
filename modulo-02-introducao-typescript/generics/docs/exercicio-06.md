# Exercício 06 - Desafio Final (Repository Pattern Completo)

## Objetivo
Criar uma classe abstrata genérica que gerencie operações de banco de dados (CRUD), utilizando Constraints, Utility Types e Interfaces.

## Requisitos

1. **O Contrato Base:**
   - Crie uma interface `BaseEntity` que obrigue a existência de:
     - `id`: string;
     - `createdAt`: Date;

2. **A Classe Genérica (O Motor):**
   - Crie uma classe abstrata `InMemoryDatabase<T extends BaseEntity>`.
   - Propriedade protegida: `items` (array de T).
   - Método `insert(item: T): void` -> Adiciona ao array.
   - Método `getOne(id: string): T | undefined` -> Busca pelo ID.
   - **O Desafio (Utility Type):**
     - Método `update(id: string, params: Partial<T>): void`.
     - Este método deve buscar o item pelo ID. Se encontrar, deve atualizar **apenas** os campos passados em `params`.
     - *Dica:* Use `Object.assign` ou spread operator para mesclar os dados antigos com os novos.

3. **Implementação Real:**
   - Defina uma interface `Product` (estendendo `BaseEntity`) com `name` (string) e `price` (number).
   - Crie a classe `ProductDatabase` estendendo `InMemoryDatabase<Product>`.

4. **Simulação:**
   - Instancie o banco de produtos.
   - Insira um produto: "Teclado", R$ 200,00 (com ID e Data manuais).
   - Busque o produto e imprima o preço.
   - Atualize **apenas** o preço para R$ 250,00 (usando o método update).
   - Busque novamente e confirme se o preço mudou e se o nome continua "Teclado".