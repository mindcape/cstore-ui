import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
  }


  submitPayment(){

    const req = {
      'idempotency_key': '1231231231',
      'source_id': 'cnon:card-nonce-ok',
      'accept_partial_authorization': false,
      'autocomplete': false,
      'order_id': '101010',
      'amount_money': {
        'amount': 11,
        'currency': 'USD'
      },
      'billing_address' : {
        'address_line_1': 'test',
        'country': 'US'
      }
    };
    this.paymentService.createPayment(req).subscribe(data => {
      console.log(data);
    });
  }

}
