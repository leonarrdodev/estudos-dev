// seguranca.ts

// --- CENÁRIO 1: O Perigo do ANY (Modo Kamikaze) ---
// Imagine que isso veio de um JSON.parse()
let jsonExterno: any = "Isso não é um número"; 

// O TypeScript DESLIGA a verificação.
// Ele deixa você tentar multiplicar texto, achando que é número.
// O código compila ✅, mas QUEBRA na execução 💥 (NaN ou Crash).
console.log("Tentando calcular com any:");
let resultadoPerigoso = jsonExterno * 2; 
console.log(resultadoPerigoso); // Resultado: NaN (Not a Number)


// --- CENÁRIO 2: A Segurança do UNKNOWN (Modo Escudo) ---
let entradaDesconhecida: unknown = "Isso também não é um número";

// Tente descomentar a linha abaixo. O TypeScript vai travar o código.
// let resultadoBloqueado = entradaDesconhecida * 2;
// ❌ Erro: 'entradaDesconhecida' is of type 'unknown'.

// --- CENÁRIO 3: O Jeito Certo (Validar antes de usar) ---
// O 'unknown' obriga você a verificar o tipo (Narrowing)

function processarSeguro(valor: unknown) {
    // 1. O porteiro barra a entrada
    if (typeof valor === "number") {
        // 2. Aqui dentro, o TS garante que é número
        console.log(`Cálculo seguro: ${valor * 2}`);
    } else if (typeof valor === "string") {
        // 3. Aqui dentro, o TS garante que é string
        console.log(`Texto seguro: ${valor.toUpperCase()}`);
    } else {
        console.log("Tipo não suportado.");
    }
}

console.log("\n--- Testando Unknown ---");
processarSeguro(10);             // Entra no if (number)
processarSeguro("olá mundo");    // Entra no else if (string)
processarSeguro(true);           // Entra no else