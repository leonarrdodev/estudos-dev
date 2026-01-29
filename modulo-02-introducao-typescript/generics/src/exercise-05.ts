interface Todo {
    id: string,
    title: string,
    description: string, 
    completed: boolean,
    createdAt: number
}

type TodoInput = Omit<Todo, 'id' | 'createdAt'>

function createTodo(todo: TodoInput): Todo {
    return {
        id: 'gt-546',
        createdAt: Date.now(),
        ...todo
    }
}

function updateTodo(id: string, changes: Partial<Todo>){

    console.log(`Alterações realizadas:`, changes)
}

type TodoPreview = Pick<Todo, 'id' | 'title'>

const todoItem: TodoPreview = {
    id: 'tr-54', 
    title: 'Caminhar'
}

const todoConfig: Record<string, string> = {
    'Trabalho': 'red',
    'Estudar': 'amarelo'
}

const newTodo: TodoInput = {
        title: 'Estudar',
        description: 'Pela manhã',
        completed: false,
}