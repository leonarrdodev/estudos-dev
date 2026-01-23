interface BaseEntity {
    id: number
}

interface Product {
    id: string
    name: string
    price: number
}

function updateRecord<T extends BaseEntity>(record: T): T {
    console.log(`Atualizando registro ${record}`)
    return record
}

const newProduct: Product = {id: 'gdfg-43534', name: 'Monitor', price: 797.90}
updateRecord(newProduct) //Tipos incompativeis de id
updateRecord({name: 'Mouse'}) //falta id