import crypto from 'node:crypto'
import util from 'node:util'
//transforma em async
const pbkdf2Async = util.promisify(crypto.pbkdf2)

async function derivarChaveMestra(senha: string, saltHex: string): Promise<Buffer> {
    const saltBuffer = Buffer.from(saltHex, 'hex')
    const iteracoes = 600000
    const tamanhoChave = 32
    const algoritmoHash = 'sha256'


    const chaveBuffer = await pbkdf2Async(senha, saltBuffer, iteracoes, tamanhoChave, algoritmoHash)
    return chaveBuffer
}


//Teste de codigo
const senhaTeste = "minha_senha_super_secreta";
const saltDoBanco = "a1b2c3d4e5f60718293a4b5c6d7e8f90"; 

async function testar() {
    console.time("Tempo de Derivação");
    const chave = await derivarChaveMestra(senhaTeste, saltDoBanco);
    console.timeEnd("Tempo de Derivação"); 
    
    console.log("Chave Mestra Gerada:", chave);
}

testar();