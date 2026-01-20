function analisarInput(dado: unknown): void{
    //simulação de erro antes de narrowing
    //console.log(dado.length)

    //verificação de tipo do argumento
    if(typeof dado === 'string'){
        console.log(`É texto com tamanho ${dado.length}`)
    } else if(typeof dado === 'number'){
        console.log(`É numero com valor ${dado}`)
    } else{
        console.log('Tipo não suportado')
    }
}

analisarInput('Erro de conexão')
analisarInput(404)
analisarInput(true)