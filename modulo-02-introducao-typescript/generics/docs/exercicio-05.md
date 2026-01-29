# Exercício 05 - Utility Types (Partial, Pick, Omit)

## Objetivo
Refatorar funções de um CRUD de tarefas para usar os tipos utilitários corretos, evitando repetição de interfaces.

## Requisitos

1.  **A Entidade Mestra:**
    - Crie uma interface `Todo` com:
      - `id`: string;
      - `title`: string;
      - `description`: string;
      - `completed`: boolean;
      - `createdAt`: number; // Timestamp

2.  **DTO de Criação (Omit):**
    - Ao criar uma tarefa, o usuário NÃO envia o `id` nem o `createdAt` (gerados pelo sistema).
    - Crie um tipo `TodoInput` usando `Omit` na interface `Todo`.
    - Crie uma função `createTodo(todo: TodoInput): Todo` que retorna o objeto completo (simule o id e data).

3.  **DTO de Atualização (Partial):**
    - Ao atualizar, o usuário pode mandar só o título, ou só o status, ou tudo.
    - Crie uma função `updateTodo(id: string, changes: Partial<Todo>)` que imprime no console o que está sendo mudado.

4.  **DTO de Visualização (Pick):**
    - Em uma listagem rápida, queremos mostrar apenas o `id` e o `title`.
    - Crie um tipo `TodoPreview` usando `Pick`.
    - Crie uma constante `todoList` desse tipo.

5.  **Mapa de Configuração (Record):**
    - Crie um objeto `todoConfig` que mapeie categorias (strings) para cores (strings) usando `Record<string, string>`. Ex: "trabalho" -> "red".