// 1. Definimos o "contrato" mínimo
interface Identifiable {
    id: number;
}

// ❌ SEM CONSTRAINT
// O TS reclama: "Não sei se T tem 'id'. T pode ser um número, boolean, etc."
// function logIdErro<T>(item: T) {
//     console.log(item.id); // Error: Property 'id' does not exist on type 'T'.
// }

// ✅ COM CONSTRAINT (extends)
// Tradução: "Aceito qualquer T, DESDE QUE T seja filho de Identifiable"
function logId<T extends Identifiable>(item: T): T {
    console.log(`Logando item #${item.id}`);
    return item;
}

// --- TESTES ---

// Cenário 1: Objeto simples com id
const user = { id: 10, name: "Alice" };
logId(user); // ✅ OK! 'user' tem id e name (superset de Identifiable)

// Cenário 2: Objeto complexo com id
const product = { id: 55, sku: "abc-123", price: 99.9 };
logId(product); // ✅ OK! 'product' cumpre o contrato mínimo.

// Cenário 3: Onde o filho chora e a mãe não vê
const config = { adminName: "Bob", version: "1.0" };
// logId(config); 
// 🛑 ERRO: Argumento não atribuível a 'Identifiable'. Faltou o 'id'.

// Cenário 4: Tipos primitivos
// logId("string solta"); 
// 🛑 ERRO: String não tem propriedade 'id'.b