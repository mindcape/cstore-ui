import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Cart } from '../store/models/cart'
import { Product } from '../store/models/Product';
import { CartItem } from '../store/models/CartItem';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    cart$ : Observable<Cart>
    cart: any

  //cart: [];
  //constructor(private http: HttpClient) {}

  constructor(private httpClient: HttpClient) {
   
  }


  // getCartItems() {
  //   return this.http.get("http://localhost:8080/api/loadCart");
  // }

  clearCart() {
    //this.cart$.next(null)
    
  }

  getCart(customerId, storeId){
    console.log("customerid, storeid "+customerId,storeId)
    this.cart$ = this.createCart(customerId,storeId);
    return this.cart$;
  }

  getAll(){

  }

  createCart(customerId, storeId) : Observable<Cart>{
    const cart= {"customerId":customerId, "storeId":storeId}
    return this.httpClient.post<Cart>("http://localhost:8080/api/carts",cart,{headers:{"Content-Type":"application/json"}});
  }

  addItemToCart(cartId: number, cartItem: CartItem) :Observable<CartItem> {
    

    // this.cart$.pipe(
    //   map(cart=>({...cart, cartItems: [...cart.cartItems,cartItem]})),
    //   tap(cart=>{ console.log(cart); this.cart = cart;})
      
    // )

    return this.httpClient.post<CartItem>("http://localhost:8080/api/carts/"+cartId+"/cartitems",{storeId:1,quantity:cartItem.quantity,productId:cartItem.productId,itemPrice:cartItem.itemPrice},{});
  }

  update(cart: Cart){
    //
  }

}   





