import { calculateTotal } from "../src/cart";

describe('Cart Logic', () => {
    
    // Cenário 1: Carrinho vazio
    it('should return 0 if cart is empty', () => {
        const result = calculateTotal([]);
        expect(result).toBe(0);
    });

    // Cenário 2: Cálculo total
    it('should calculate total correctly for multiple items', () => {
        const items = [
            { name: 'Fone', price: 10, quantity: 2 },  // 20
            { name: 'Iphone', price: 30, quantity: 1 } // 30
        ];
        
        const result = calculateTotal(items);
        expect(result).toBe(50);
    });
});