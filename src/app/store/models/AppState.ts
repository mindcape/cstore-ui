import { Product } from './Product';
import { Cart } from './cart';
import { StoreCustomer } from './storecustomer';
import { Store } from '@ngrx/store';
import { StorePayment } from './storepayment';
import { CartItem } from './CartItem';

export default class AppState {

     products: Product[];
     cart: Cart;
     //cartItems: CartItem[]=[];
    // readonly cust: StoreCustomer,
    // readonly shop: Store,
    // readonly payment: StorePayment

}

export const initialState =():AppState=>{
    return {products:Array<Product>(),cart:new Cart()}
};      