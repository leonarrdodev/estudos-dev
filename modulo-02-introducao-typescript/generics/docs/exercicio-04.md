# Exercício 04 - Classes Genéricas (Cache System)

## Objetivo
Criar uma classe genérica utilitária para gerenciamento de dados chave-valor (Key-Value Store).

## O Problema
Precisamos de um mecanismo para armazenar dados temporários na memória. Às vezes armazenamos configurações (strings), às vezes sessões de usuário (objetos). Não podemos criar uma classe `StringCache` e outra `UserCache`.

## Requisitos
1. **Interface de Dados:**
   - Crie uma interface `Product` com `id`, `name`, `price`.

2. **A Classe Genérica:**
   - Crie uma classe chamada `LocalCache<T>`.
   - Ela deve ter uma propriedade **privada** chamada `data` para armazenar os itens.
   - **Dica:** O tipo dessa propriedade deve ser um objeto onde a chave é string e o valor é T. Sintaxe: `private data: { [key: string]: T } = {};`

3. **Métodos:**
   - `set(key: string, value: T): void` -> Adiciona/Atualiza um valor.
   - `get(key: string): T | undefined` -> Retorna o valor pela chave.
   - `remove(key: string): void` -> Remove a chave do objeto.

4. **Implementação e Teste:**
   - Instancie um cache para `string` (ex: configurações de cores). Adicione e busque um item.
   - Instancie um cache para `Product`. Adicione um produto e imprima seu preço no console.