import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StorePayment } from 'src/app/store/models/storepayment';

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
  storePay$ : Observable<StorePayment[]>;
  loading$: Observable<boolean>;

  constructor(private paymentService: PaymentService) {
    this.storePay$ = paymentService.entities$;
    this.loading$ = paymentService.loading$;
    //store.pipe(select('shop')).subscribe(data => (this.payIntent = data.initPay));
   }

  ngOnInit() {
    //this.paymentService.createStripePayIntent(this.orderData).subscribe(result=>{
      
    };
  

}
