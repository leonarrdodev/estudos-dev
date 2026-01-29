interface Product {
    id: number,
    name: string,
    price: number
}

class LocalCache<T> {
    private data: {[key: string]: T} = {}

    set(key: string, value: T): void{
        this.data[key] = value
    }

    get(key: string): T | undefined {
        return this.data[key]
    }

    remove(key: string): void{
       delete this.data[key]
    }

}

const themeCache = new LocalCache<string>()
themeCache.set('cor-fundo', '#fff')
const themeColorCache = themeCache.get('cor-fundo')
console.log(themeColorCache)

const productCache = new LocalCache<Product>()
productCache.set('Mouse gamer', {id: 3423, name: 'mouse', price: 197})
const priceProduct = productCache.get('Mouse gamer')?.price
console.log(priceProduct)