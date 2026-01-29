// 1. A Regra de Ouro (Constraint)
// Para o nosso Repository genérico funcionar, ele precisa garantir
// que TODOS os itens tenham pelo menos um ID.
interface BaseEntity {
    id: string;
}

// 2. A Classe Pai (O Motor Genérico)
// 'abstract' impede que alguém dê 'new BaseRepository' direto.
// Ela serve apenas de molde para outras classes.
abstract class BaseRepository<T extends BaseEntity> {
    
    // Simulação de Banco de Dados em Memória
    protected database: T[] = [];

    // Método Genérico: Cria qualquer coisa
    create(data: T): T {
        this.database.push(data);
        return data;
    }

    // Método Genérico: Busca qualquer coisa
    findAll(): T[] {
        return this.database;
    }

    // Método Genérico: Busca por ID (Graças ao 'extends BaseEntity')
    findById(id: string): T | undefined {
        return this.database.find(item => item.id === id);
    }
}

// --- AGORA A MÁGICA ACONTECE (Herança) ---

// Definimos a entidade User
interface User extends BaseEntity {
    name: string;
    email: string;
}

// Criamos o repositório ESPECÍFICO
// Ele ganha todos os poderes do Pai (create, findById) de graça!
class UserRepository extends BaseRepository<User> {
    
    // Podemos adicionar métodos exclusivos que só fazem sentido para User
    findByEmail(email: string): User | undefined {
        return this.database.find(user => user.email === email);
    }
}

// Definimos a entidade Product
interface Product extends BaseEntity {
    price: number;
    sku: string;
}

class ProductRepository extends BaseRepository<Product> {
    // Produto não tem email, então não tem findByEmail.
    // Mas poderia ter findBySku...
}

// --- USO PRÁTICO ---

const userRepo = new UserRepository();
userRepo.create({ id: "1", name: "Leonardo", email: "leo@dev.com" }); // Usou método do PAI
console.log(userRepo.findById("1")); // Usou método do PAI
console.log(userRepo.findByEmail("leo@dev.com")); // Usou método do FILHO

const productRepo = new ProductRepository();
productRepo.create({ id: "100", price: 99.90, sku: "ABC-123" });
// productRepo.findByEmail() // 🛑 Erro! Produto não tem isso.