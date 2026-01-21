interface User {
    id: number,
    name: string
}

type HttpResponse<T> = {
    data: T, status: number, timestamp: Date
}

function createHttpResponse<T>(data: T, status: number): HttpResponse<T>{
    return {
        data,
        status,
        timestamp: new Date()
    }
}

const response1 = createHttpResponse<User>({id: 35423, name: 'Leo'}, 200)
//response1.data.email
console.log(response1)
const response2 = createHttpResponse('Acess Denied', 403)
console.log(response2)