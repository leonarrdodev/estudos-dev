// 1. A Fonte da Verdade (Entidade Completa do Banco)
interface User {
    id: number;
    name: string;
    email: string;
    password?: string; // Opcional aqui só para o exemplo, mas geralmente é obrigatório no DB
    createdAt: Date;
}

// --- CASO 1: PARTIAL (Torna tudo opcional) ---
// Ideal para endpoints PATCH (Atualização parcial)
function updateUser(id: number, fieldsToUpdate: Partial<User>) {
    console.log(`Atualizando User ${id} com:`, fieldsToUpdate);
}

// Posso passar só o nome...
updateUser(1, { name: "Leonardo New" });
// ...ou só o email e a data. Não preciso passar o objeto inteiro.
updateUser(1, { email: "leo@new.com", createdAt: new Date() });


// --- CASO 2: OMIT (Remove chaves específicas) ---
// Ideal para "Sanitizar" respostas (Remover dados sensíveis)
type UserResponse = Omit<User, 'password'>;

const response: UserResponse = {
    id: 1,
    name: "Leo",
    email: "leo@gmail.com",
    createdAt: new Date()
    // password: "123" // 🛑 ERRO! Omit removeu essa chave. O TS não deixa vazar.
};


// --- CASO 3: PICK (Seleciona apenas o que interessa) ---
// Ideal para payloads específicos (ex: Login)
type UserCredentials = Pick<User, 'email' | 'password'>;

const loginPayload: UserCredentials = {
    email: "leo@gmail.com",
    password: "123"
    // id: 1 // 🛑 ERRO! Pick só pegou email e password. O resto não existe aqui.
};


// --- CASO 4: RECORD (Cria mapas/dicionários) ---
// Sintaxe: Record<TipoDaChave, TipoDoValor>
// Útil para agrupar dados por ID ou Categoria
type UserRoleConfig = Record<string, string[]>;

const permissions: UserRoleConfig = {
    "admin": ["delete", "create", "update"],
    "editor": ["update", "create"],
    // "user": 123 // 🛑 Erro! O valor tem que ser array de strings
};