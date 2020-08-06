import { Component, Input, OnInit } from '@angular/core';
//import { AddToCart, RemoveFromCart } from '../store/actions';
import { Product } from '../store/models/Product';
import { Observable } from 'rxjs';
import { FruitsServiceService } from '../fruits.service';
import { CartService } from '../cart/cart.service';
import { CartComponent } from '../cart/cart.component';
import { Cart } from '../store/models/cart';
import { CartItem } from '../store/models/CartItem';
import { Store } from '@ngrx/store';
import  AppState  from '../store/models/AppState';
import * as CartActions from '../store/actions/cart.actions';
import { AddToCart, RemoveFromCart} from '../store/actions/actions';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  // cart$: Observable<Cart>;
  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    const cartItem= {"id":item.id,"itemPrice":item.price,
    "productId":item.id,"quantity":1}
    this.store.dispatch(CartActions.AddCartItemAction({cartId:2,cartItem:cartItem}));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    const cartItem= {"id":item.id,"itemPrice":item.price,
    "productId":item.id,"quantity":1}
    this.store.dispatch(new RemoveFromCart(cartItem));
    this.inCart = false;
  }



  ngOnInit() {
    //this.cartService.
  }
}
