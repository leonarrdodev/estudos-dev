import crypto from 'node:crypto'

function simularFluxoDoBanco(): {ivSalvo: string, integridadeMantida: Boolean} {
    const ivBuffer = crypto.randomBytes(12)
    const ivHex = ivBuffer.toString('hex')

    const ivReconstruido = Buffer.from(ivHex, 'hex')

    return {ivSalvo: ivHex, integridadeMantida: ivBuffer.equals(ivReconstruido)}
}

console.log(simularFluxoDoBanco())