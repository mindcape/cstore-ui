import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { Cart } from '../store/models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // constructor(private store: Store<{ items: []; cart: [] }>) {
  //   store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  // }

  cart$: Observable<Cart[]>;
  loading$: Observable<boolean>;

  constructor(private cartService: CartService){
    this.cart$ = cartService.entities$;
    this.loading$ = cartService.loading$;
  }

  cartItems: Cart[];

  ngOnInit() {
    this.cartService.getAll().subscribe(data => {
      this.cartItems = data;
    });
  }
}
