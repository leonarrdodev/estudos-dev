interface User {
    id: number;
    name: string;
    email: string;
}

interface Product {
    id: number;
    name: string;
    price: number
}

interface ApiResponse<T> {
    data: T;
    status: number;
    message?: string;
}

type Paginated<T> = {
    results: T[];
    total: number;
    page: number;
}

const userResponse: ApiResponse<User> = {
    data: {id: 4324, name: 'Leonardo', email: 'leo@gmail.com'},
    status: 200,
    message: 'Success'
}

const productListReponse: ApiResponse<Paginated<Product>> = {
    data: {
        results: [
            {id: 343, name: 'Monitor', price: 343},
            {id: 45, name: 'Mouse', price: 199}
        ],
        total: 34,
        page: 3
    },
    status: 200
}

console.log(`Usuario: ${userResponse.data.name}`)
console.log(`Preço do segundo produto R$ ${productListReponse.data.results[1].price}`)