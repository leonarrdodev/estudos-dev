# 🛒 Exercício 01: Lógica de Carrinho de Compras

## 🎯 Objetivo
Implementar e testar uma função pura responsável por calcular o valor total de um carrinho de compras. O objetivo é garantir que a lógica de negócio funcione isoladamente antes de qualquer integração com banco de dados ou API.

## ⚙️ Especificações Técnicas

### 1. Interface `CartItem`
O sistema deve possuir uma interface tipada para os itens do carrinho contendo:
- `name` (string): Nome do produto.
- `price` (number): Preço unitário do produto.
- `quantity` (number): Quantidade do produto no carrinho.

### 2. Função `calculateTotal`
- **Entrada:** Um array de `CartItem`.
- **Processamento:** Deve iterar sobre a lista, multiplicando preço por quantidade de cada item e somando ao total.
- **Saída:** Um número (`number`) representando o valor total.

## 🧪 Casos de Teste Obrigatórios (Test Cases)

O arquivo de teste (`cart.spec.ts`) deve cobrir, no mínimo, os seguintes cenários:

| ID  | Descrição do Caso de Teste | Entrada (Input) | Saída Esperada (Output) |
| --- | --- | --- | --- |
| **TC-01** | Carrinho vazio | `[]` | `0` |
| **TC-02** | Carrinho com múltiplos itens | `[{price: 10, qtd: 2}, {price: 30, qtd: 1}]` | `50` |

## 🚀 Entregáveis
1. Arquivo: `src/cart.ts`
2. Arquivo: `tests/cart.spec.ts`