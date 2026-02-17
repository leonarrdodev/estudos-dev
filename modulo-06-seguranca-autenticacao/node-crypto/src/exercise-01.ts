import crypto from 'node:crypto';

function verificarAssinaturaWebhook(payload: string, assinaturaRecebida: string, secret: string): boolean {
    const hmacGenerator = crypto.createHmac('sha256', secret);
    hmacGenerator.update(payload);
    
   
    const bufferGerado = hmacGenerator.digest(); 
    
    const bufferRecebido = Buffer.from(assinaturaRecebida, 'hex');

    if (bufferGerado.length !== bufferRecebido.length) {
        return false;
    }
    return crypto.timingSafeEqual(bufferGerado, bufferRecebido);
}
