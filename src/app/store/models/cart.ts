import { Product } from './Product';
import { CartItem } from './CartItem';



export class Cart {
       readonly id: number;
       readonly custId: number;
       readonly storeId: number;
       readonly total: number;
       cartItems: CartItem[]= Array<CartItem>();  
 }
  

 