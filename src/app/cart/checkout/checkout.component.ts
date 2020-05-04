import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Store, select } from '@ngrx/store';
import { Product } from 'src/app/product/product.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  orderData = {
    items: [{ id: "photo-subscription" }],
    currency: "usd"
  };

  payIntent: String;

  constructor(private paymentService: PaymentService, private store: Store<{ items: Product[]; cart:Product[]; initPay: String}>) {
    store.pipe(select('shop')).subscribe(data => (this.payIntent = data.initPay));
   }

  ngOnInit() {
    this.paymentService.createStripePayIntent(this.orderData).subscribe(result=>{
      
    });
  }

}
