// ❌ ABORDAGEM 1: O jeito inseguro (usando any)
// O problema: perdemos o controle do que entra e do que sai.
function wrapInObjectAny(value: any): any {
    return {
        data: value,
        timestamp: new Date()
    };
}

const resultAny = wrapInObjectAny("Ola Mundo");
// Tente digitar "resultAny.data." abaixo.
// O TypeScript NÃO vai sugerir métodos de string (toUpperCase, etc)
// porque ele trata 'data' como qualquer coisa.
console.log(resultAny.data.toFixed()); // 💥 ERRO em tempo de execução, mas o TS não avisa!


// ✅ ABORDAGEM 2: O jeito seguro (Generics)
// 'T' é uma variável que captura o TIPO do valor passado.
function wrapInObject<T>(value: T): { data: T, timestamp: Date } {
    return {
        data: value,
        timestamp: new Date()
    };
}

// Uso Prático:
// 1. Passando String
const stringResult = wrapInObject<string>("Hello Backend");
// O TypeScript sabe que 'stringResult.data' é string.
console.log(stringResult.data.toUpperCase()); // ✅ Funciona e autocompleta!

// 2. Inferência de Tipo (O compilador é inteligente)
// Não precisamos escrever <number>, o TS percebe pelo valor (123).
const numberResult = wrapInObject(123);
// numberResult.data é automaticamente tratado como number.
console.log(numberResult.data.toFixed(2)); // ✅ Funciona!

// 3. Objetos complexos
type User = { id: number; name: string };
const userResult = wrapInObject<User>({ id: 1, name: "Generics" });

// Se tentarmos acessar uma propriedade que não existe:
// console.log(userResult.data.email); // 🛑 O TypeScript barra antes de compilar!