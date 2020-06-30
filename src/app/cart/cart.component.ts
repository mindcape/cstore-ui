import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../store/models/cart';
import { CartService } from './cart.service';
import { Product } from '../store/models/Product';


// export class Cart {
//   products : Product[];
//   totalQuantity : number;
//   totalAmount : number;
// }


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  loading$: Observable<boolean>;
  cart$: Observable<Cart[]>;
  products$ : Observable<Product[]>;


  constructor(private cartService: CartService) {
    this.cart$ = cartService.entities$;
    this.loading$ = cartService.loading$;
  }

  inCart = true;
  cart: Product[] = [];
  totalCartAmount: number;
  totalItems : number;

  ngOnInit() {
    //this.getCart();
  }

  totalPrice() {
    let price: number = 0;
    let items: number = 0;
    this.cart.forEach((product:Product, index)=>{
      price += product.price;
      items += 1;
    });
    this.totalCartAmount = price;
    this.totalItems = items;
  }


 
  add(cart: Cart) {
    this.cartService.add(cart);
  }
 
  delete(cart: Cart) {
    this.cartService.delete(cart.id);
  }
 
  getCart() {
    this.cartService.getAll();
  }
 
  update(cart: Cart) {
    this.cartService.update(cart);
  }

}