import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../store/models/cart';
import { CartService } from './cart.service';
import { Product } from '../store/models/Product';
import { CartItem } from '../store/models/CartItem';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  loading$: Observable<boolean>;
  cart$: Observable<Cart>;
  products$ : Observable<Product[]>;


  constructor(private cartService: CartService,private authService: AuthenticationService) {
    this.cart$ = cartService.cart$;
  }

  inCart = true;
  cart: Cart;
  totalCartAmount: number;
  totalItems : number;

  ngOnInit() {
    //this.getCart();
  }

  totalPrice() {
    let price: number = 0;
    let items: number = 0;
    this.totalCartAmount = price;
    this.totalItems = items;
  }


 
  add(cartItem: CartItem) {
    this.cartService.addItemToCart(this.cart.id, cartItem);
  }
 
  // delete(cart: CartItem) {
  //   this.cartService.delete(cart.id);
  // }
 
  getCart() {
    this.cartService.getCart(this.authService.currentUserValue.id,1).subscribe((cart)=>{
      this.cart = cart;
    })
  }
 
  updateCart() {
    this.cartService.update(this.cart);
  }

}