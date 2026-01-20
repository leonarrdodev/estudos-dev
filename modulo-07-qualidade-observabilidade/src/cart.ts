export interface CartItem { 
    name: string;
    price: number;
    quantity: number;
}

export function calculateTotal(items: CartItem[]): number {

    return items.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0); 
}