// auth.utils.ts

/**
 * Apenas registra uma informação no console.
 * Retorna VOID: A função termina e o programa CONTINUA na linha de baixo.
 */
function logAccess(userId: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[ACCESS] User ${userId} at ${timestamp}`);
    // Implicitamente retorna undefined, mas o tipo diz "não espere nada".
}

/**
 * Lança um erro fatal de aplicação.
 * Retorna NEVER: O programa é INTERROMPIDO ou desviado para um catch.
 * NADA abaixo da chamada dessa função será executado.
 */
function throwAuthError(reason: string): never {
    throw new Error(`⛔ Acesso Negado: ${reason}`);
}

// --- TESTANDO O FLUXO ---

function checkUserPermission(role: string): string {
    // 1. Uso do VOID
    logAccess("user_123"); 
    // O código CONTINUA aqui normalmente...
    
    if (role !== 'admin') {
        // 2. Uso do NEVER
        throwAuthError("Você não é administrador.");
        
        // ☠️ DEAD CODE (Código Morto)
        // O TypeScript sabe que o código nunca chegará aqui.
        // Se você passar o mouse aqui no VS Code, ele pode até ficar cinza.
        console.log("Isso nunca será impresso se o erro for lançado.");
    }

    return "Acesso Permitido ao Painel Admin";
}

try {
    console.log(checkUserPermission('guest'));
} catch (e) {
    console.log("Capturei o erro lançado pelo never!");
}
