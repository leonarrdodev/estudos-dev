// --- 1. As Entidades (O "Conteúdo") ---
interface User {
    id: number;
    name: string;
    role: "admin" | "user";
}

interface Product {
    id: number;
    price: number;
    title: string;
}

// --- 2. Interface Genérica (O "Envelope") ---
// T representa o dado principal da resposta.
// Pode ser um objeto único, um array, null, etc.
interface ApiResponse<Data> {
    data: Data;           // O coração da resposta
    status: number;       // Metadado HTTP
    success: boolean;     // Flag simples
    timestamp: Date;      // Metadado de tempo
}

// --- 3. Type Alias Genérico (Estrutura Complexa) ---
// Usamos Type aqui para definir a forma de uma paginação.
// Note que 'T' vira 'T[]' (Array de T) dentro de items.
type Paginated<T> = {
    items: T[];           // Lista do que quer que seja T
    total: number;
    page: number;
    lastPage: number;
}

// --- 4. USO PRÁTICO (Combinando tudo) ---

// Cenário A: Buscando UM usuário (Sem paginação)
const loginResponse: ApiResponse<User> = {
    data: { id: 1, name: "Leonardo", role: "admin" },
    status: 200,
    success: true,
    timestamp: new Date()
};
// Experimente: Digite 'loginResponse.data.' e veja o autocomplete de User!

// Cenário B: Buscando PRODUTOS PAGINADOS (Generics Aninhados 🤯)
// Leia de fora para dentro:
// "Uma Resposta de API... contendo uma Paginação... de Produtos".
const catalogResponse: ApiResponse<Paginated<Product>> = {
    status: 200,
    success: true,
    timestamp: new Date(),
    data: {
        total: 500,
        page: 1,
        lastPage: 50,
        items: [
            { id: 101, title: "Teclado Mecânico", price: 350.00 },
            { id: 102, title: "Mouse Gamer", price: 120.00 }
        ]
    }
};

// Acessando dados profundos com segurança total:
console.log(catalogResponse.data.items[0].title); 
// O TS sabe que isso é string. Se errar o nome (ex: .name), ele avisa.