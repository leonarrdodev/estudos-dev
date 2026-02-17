# Exercício 01: Validação de Webhook de Pagamento (HMAC)

## 🎯 Contexto
Você trabalha no backend de um e-commerce. Quando um cliente paga um boleto, o gateway de pagamento (ex: Stripe, Pagar.me) envia um `POST` para a sua API avisando que o pedido foi pago. 
Para provar que a requisição veio mesmo do gateway e não de um hacker tentando aprovar a própria compra, o gateway envia uma assinatura HMAC no cabeçalho (header) da requisição.

## 📝 Requisitos
1. Crie uma função chamada `verificarAssinaturaWebhook`.
2. A função deve receber três parâmetros:
   - `payload` (string): O corpo da requisição (ex: `{"pedidoId": 123, "status": "pago"}`).
   - `assinaturaRecebida` (string): O hash hexadecimal que o gateway enviou.
   - `secret` (string): A chave secreta que só a sua API e o gateway conhecem.
3. A função deve calcular o HMAC do `payload` usando o algoritmo `sha256` e a chave `secret`.
4. A função deve retornar `true` se a assinatura calculada for estritamente igual à `assinaturaRecebida`, ou `false` caso contrário.

## 🧪 Casos de Teste
Use estes dados no final do seu arquivo para testar se a função está correta:

```typescript
const secretDoGateway = "whsec_minhaChaveSuperSecreta123";
const payloadDaRequisicao = '{"pedidoId":9999,"status":"pago"}';
const assinaturaValida = "679f14de25f4fb47271b3e8c716cd5d9d71b6973ffb6142a5a04b19c4384aedc";
const assinaturaFalsa = "111f14de25f4fb47271b3e8c716cd5d9d71b6973ffb6142a5a04b19c4384aedc";

// verificarAssinaturaWebhook(payloadDaRequisicao, assinaturaValida, secretDoGateway) -> deve retornar TRUE
// verificarAssinaturaWebhook(payloadDaRequisicao, assinaturaFalsa, secretDoGateway) -> deve retornar FALSE
// verificarAssinaturaWebhook('{"pedidoId":9999,"status":"cancelado"}', assinaturaValida, secretDoGateway) -> deve retornar FALSE