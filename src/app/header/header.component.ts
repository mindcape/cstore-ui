import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { Cart } from '../store/models/cart';
import { CartItem } from '../store/models/CartItem';
import  AppState  from '../store/models/AppState';
import * as CartActions from '../store/actions/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // constructor(private store: Store<{ items: []; cart: [] }>) {
  //   store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  // }
  cart: Observable<Cart>;
  constructor(private store: Store<AppState>) {
    this.store.pipe(select('cart')).subscribe(cart=>{
      this.cart = of(cart);
    })
  }

  

  ngOnInit() {
      //this.store.dispatch(CartActions.GetCartAction({customerId:3,storeId:1}));
  }
}
