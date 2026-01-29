interface BaseEntity {
    id:string, 
    createdAt: Date
}

abstract class InMemoryDatabase<T extends BaseEntity> {
    protected items: T[] = []

    insert(item: T): void{
        this.items.push(item)
    }

    getOne(id: string): T | undefined{
        return this.items.find(item => item.id === id)
    }

    update(id: string, params: Partial<T>): void{
        let itemIndex = this.items.findIndex(item => item.id === id)
        if(itemIndex !== -1){
            this.items[itemIndex] = {...this.items[itemIndex], ...params}
        }
    }
}

interface Product extends BaseEntity {
    name: string,
    price: number
}

class ProductDatabase extends InMemoryDatabase<Product> {

}

const productDb = new ProductDatabase()
productDb.insert({id: 'fgr-543', createdAt: new Date(), name: 'Teclado', price: 200})
let product = productDb.getOne('fgr-543')
console.log(`Preço do produto: R$ ${product?.price}`)

productDb.update('fgr-543', {price: 250})
product = productDb.getOne('fgr-543')
console.log(`Produto ${product?.name} R$ ${product?.price}`)

