# Exercício 03: Derivação de Chaves Assíncrona (O Motor Zero-Knowledge)

## 🎯 Contexto
No backend do *The Vault*, quando o usuário for acessar seus segredos, ele enviará a senha em texto plano. Sua API precisará buscar o `salt` desse usuário no banco de dados SQLite (que estará em formato hexadecimal) e rodar o PBKDF2 para recriar a chave de 32 bytes necessária para descriptografar os dados.

Tudo isso deve acontecer de forma assíncrona para não bloquear outras requisições do servidor.

## 📝 Requisitos
1. Importe o módulo `crypto` nativo.
2. Importe o módulo `util` (nativo do Node.js) para usar a função `promisify`. 
   *(Dica de Sênior: O `crypto.pbkdf2` usa o padrão antigo de callbacks. Usar `util.promisify(crypto.pbkdf2)` transforma ele em uma função moderna baseada em Promises/async-await).*
3. Crie uma função assíncrona chamada `derivarChaveMestra`.
4. A função deve receber dois parâmetros:
   - `senha` (string): A senha em texto plano.
   - `saltHex` (string): O salt salvo no banco em formato hexadecimal.
5. A função deve:
   - Converter o `saltHex` de volta para um `Buffer`.
   - Executar o PBKDF2 assíncrono com: **600.000 iterações**, **32 bytes** de tamanho de chave e algoritmo **'sha256'**.
   - Retornar a chave derivada final no formato string **hexadecimal** (que terá 64 caracteres de comprimento).

## 🧪 Casos de Teste
Use este trecho no final do seu código para validar a implementação:

```typescript
const senhaTeste = "minha_senha_super_secreta";
const saltDoBanco = "a1b2c3d4e5f60718293a4b5c6d7e8f90"; // Simulando o que viria do SQLite

async function testar() {
    console.time("Tempo de Derivação");
    const chave = await derivarChaveMestra(senhaTeste, saltDoBanco);
    console.timeEnd("Tempo de Derivação"); // Deve levar entre 0.1s e 0.5s
    
    console.log("Chave Mestra Gerada:", chave);
    // A chave gerada DEVE ser sempre a mesma para esta combinação exata de senha e salt.
    // Se você rodar o código 5 vezes, a string hexadecimal impressa tem que ser idêntica em todas.
}

testar();
```
### 👣 Passo a Passo Detalhado
1. Crie o arquivo `src/exercise-03.ts`.
2. No topo, importe os módulos: `import crypto from 'node:crypto';` e `import util from 'node:util';`.
3. Transforme a função de callback em Promise: `const pbkdf2Async = util.promisify(crypto.pbkdf2);`.
4. Declare a função `async function derivarChaveMestra(senha: string, saltHex: string): Promise<string>`.
5. Dentro da função, crie o buffer do salt: `const saltBuffer = Buffer.from(saltHex, 'hex');`.
6. Chame a função promisificada com `await`: `const chaveBuffer = await pbkdf2Async(senha, saltBuffer, 600000, 32, 'sha256');`.
7. Retorne a chave convertida: `return chaveBuffer.toString('hex');`.
8. Cole o código de teste no final do arquivo.
9. Execute com `npx ts-node src/exercise-03.ts` e verifique se o tempo de execução é simulado corretamente e se a chave gerada se mantém consistente.

---