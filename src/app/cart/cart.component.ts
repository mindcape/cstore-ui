import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.component';
import { select, Store } from '@ngrx/store';
import { GetCartItems, LoadCartItems } from '../store/actions';
import { ProductListComponent } from '../product-list/product-list.component';

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

  constructor(private store: Store<{ items: Product[]; cart:Product[] }>) {
    store.pipe(select('shop')).subscribe(data => (this.cart = data.cart));
  }

  inCart = true;
  cart: Product[] = [];
  totalCartAmount: number;
  totalItems : number;

   
  ngOnInit() {
    this.store.dispatch(new LoadCartItems(this.cart));
    this.totalPrice();
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

}