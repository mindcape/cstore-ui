import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import your library
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    NgxStripeModule.forRoot('pk_test_XdzU7CWZLSGKaWaZ3Y5z4h3y00qf9g35KH'),
    ReactiveFormsModule
  ]
})
export class CartModule { }
