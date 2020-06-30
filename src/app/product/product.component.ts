import { Component, Input, OnInit } from '@angular/core';
//import { AddToCart, RemoveFromCart } from '../store/actions';
import { Product } from '../store/models/Product';
import { Observable } from 'rxjs';
import { FruitsServiceService } from '../fruits.service';
import { CartService } from '../cart/cart.service';
import { CartComponent } from '../cart/cart.component';
import { Cart } from '../store/models/cart';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //constructor(private store: Store<{ items: []; cart: [] }>) {}
  constructor(private fruitService: FruitsServiceService, private cartService: CartService) {
    this.products$ = fruitService.entities$;
    this.loading$ = fruitService.loading$;
    this.carts$ = cartService.entities$;
  }

  loading$: Observable<boolean>;
  products$ : Observable<Product[]>;
  carts$ : Observable<Cart[]>;

  cart: Cart;
  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    //this.store.dispatch(new AddToCart(item));
    //this.cartService.addOneToCache(this.cart);
    //this.cart = new Cart(1,[item]);
    this.cartService.addOneToCache(this.cart);
    this.inCart = true;
  }

  // removeFromCart(item: Product) {
  //   this.store.dispatch(new RemoveFromCart(item));
  //   this.inCart = false;
  // }



  ngOnInit() {
    //this.cartService.
  }
}
