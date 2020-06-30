import { Product } from './Product';



export class Cart {
    constructor(
      public readonly id: number,
      public readonly custId: number,
      public readonly storeId: number,
      public readonly total: number
    ) {}
  }
  