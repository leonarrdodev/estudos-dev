function initializeService(): void {
    console.log('Serviço iniciado...')
}

function fatalCrash(): never {
  throw new Error('Erro crítico detectado. Encerrando...')
}


function main(): void {
    initializeService()
    fatalCrash()
    console.log('Eu nunca serei exibido!!')
}

main()