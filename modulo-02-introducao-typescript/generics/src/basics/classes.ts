// Definimos a Classe Genérica com <T>
class Queue<T> {
    // O modificador 'private' impede que mexam no array diretamente de fora
    private data: T[] = [];

    // Adiciona um item ao final
    add(item: T): void {
        this.data.push(item);
    }

    // Remove e retorna o primeiro item (ou undefined se vazia)
    pop(): T | undefined {
        return this.data.shift();
    }

    // Apenas visualiza o próximo sem remover
    peek(): T | undefined {
        return this.data[0];
    }
}

// --- USO PRÁTICO ---

// CASO 1: Fila de Tarefas (Strings)
const taskQueue = new Queue<string>();

taskQueue.add("Enviar Email de Boas Vindas");
taskQueue.add("Gerar Relatório PDF");

const nextTask = taskQueue.pop(); // O TS sabe que nextTask é 'string | undefined'
console.log(`Executando: ${nextTask?.toUpperCase()}`);


// CASO 2: Fila de Números (Processamento matemático)
const numberQueue = new Queue<number>();
numberQueue.add(10);
numberQueue.add(20);
// numberQueue.add("Trinta"); // 🛑 Erro! O TS protege nossa fila numérica.


// CASO 3: Fila de Objetos Complexos (Misturando com Interfaces)
interface EmailJob {
    to: string;
    subject: string;
}

const emailQueue = new Queue<EmailJob>();

emailQueue.add({ to: "leo@teste.com", subject: "Sua fatura chegou" });

// Ao retirar, temos acesso total às propriedades
const job = emailQueue.peek();
if (job) {
    console.log(`Próximo email para: ${job.to}`);
}