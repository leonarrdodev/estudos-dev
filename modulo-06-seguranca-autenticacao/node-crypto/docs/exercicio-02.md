# Exercício 02: O Ciclo de Vida do IV (Vetor de Inicialização)

## 🎯 Contexto
No desafio *The Vault*, cada segredo salvo no banco de dados SQLite precisa ter seu próprio IV (Initialization Vector) para garantir que a criptografia AES-GCM seja inviolável. O banco de dados armazena textos (strings), e não a memória bruta (Buffers) do Node.js. 

Portanto, ao salvar um segredo, você deve converter o IV em texto. Ao buscar esse segredo para descriptografá-lo, você precisará transformar esse texto de volta na memória bruta exata que foi gerada originalmente.

## 📝 Requisitos
1. Crie uma função chamada `simularFluxoDoBanco` (não precisa receber parâmetros).
2. Dentro da função, gere um IV criptograficamente seguro com **exatamente 12 bytes**.
3. Converta esse IV original para uma string no formato `hex` (Isso simula o `INSERT` no SQLite).
4. Em seguida, pegue apenas a string `hex` gerada e converta-a de volta para um objeto `Buffer` (Isso simula o `SELECT` do SQLite).
5. A função deve retornar um objeto contendo duas propriedades:
   - `ivSalvo`: A string hexadecimal gerada no passo 3.
   - `integridadeMantida`: Um booleano (`true` ou `false`) resultante da verificação se os bytes do Buffer original são **exatamente iguais** aos bytes do Buffer reconstruído.

## 🧪 Saída Esperada
Ao executar o código, o console deve mostrar algo assim:
```javascript
{
  ivSalvo: 'a1b2c3d4e5f60718293a4b5c', // 24 caracteres aleatórios diferentes a cada execução
  integridadeMantida: true
}