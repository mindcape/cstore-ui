import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Cart } from '../store/models/cart'
import { Product } from '../store/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService extends EntityCollectionServiceBase<Cart>{

  //cart: [];
  //constructor(private http: HttpClient) {}

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cart', serviceElementsFactory);
  }


  // getCartItems() {
  //   return this.http.get("http://localhost:8080/api/loadCart");
  // }

  // clearCart() {
  //   this.cart = [];
  //   return this.cart;
  // }



}   





