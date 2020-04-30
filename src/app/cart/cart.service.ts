import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.http.get("http://localhost:8080/api/loadCart");
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

}   