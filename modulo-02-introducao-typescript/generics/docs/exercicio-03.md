# Exercício 03 - Interfaces e Types Genéricos

## Objetivo
Criar um sistema de tipos para padronizar respostas de API, incluindo paginação.

## Requisitos

1. **Entidades Básicas:**
   - Crie uma interface `User` com: `id` (number), `name` (string), `email` (string).
   - Crie uma interface `Product` com: `id` (number), `name` (string), `price` (number).

2. **Generic Wrapper (O Envelope):**
   - Crie uma interface genérica `ApiResponse<T>` que tenha:
     - `data`: do tipo `T`.
     - `status`: number (ex: 200, 404).
     - `message`: string (opcional).

3. **Generic Pagination (A Lista Inteligente):**
   - Crie um Type Alias genérico `Paginated<T>` que tenha:
     - `results`: um array de `T`.
     - `total`: number.
     - `page`: number.

4. **Implementação:**
   - Crie uma variável `userResponse` tipada explicitamente como `ApiResponse<User>` contendo um usuário fictício.
   - Crie uma variável `productListResponse` tipada como `ApiResponse<Paginated<Product>>`.
     - Preencha com dados fictícios (pelo menos 2 produtos no array `results`).

5. **Teste de Acesso:**
   - Imprima no console o nome do usuário da primeira resposta.
   - Imprima no console o preço do segundo produto da lista paginada.