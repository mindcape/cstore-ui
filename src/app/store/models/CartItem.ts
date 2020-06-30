export class CartItem {
    constructor(
        public readonly id: number,
        public readonly productId: number,
        public readonly quantity: number,
        public readonly itemPrice: number,
        public readonly cartId: number
    ){}
}