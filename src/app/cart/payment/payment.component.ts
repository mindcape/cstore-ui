import {AfterViewInit, Component, OnInit, NgModule, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StripeService, Elements, Element as StripeElement, ElementsOptions, TokenResult, ConfirmPaymentIntentOptions } from "ngx-stripe";
import { PaymentService,PayRequest } from '../payment.service';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})

export class PaymentComponent implements OnInit{


  elements: Elements;
  card: StripeElement;
  token: TokenResult;
  showCompletePayment: boolean;
 
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };
 
  stripeTest: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentService: PaymentService) {}
 
  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
      this.showCompletePayment = false;
  }
 
  buy() {
    const name = this.stripeTest.get('name').value;
    //const amount = this.stripeTest.get('total').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          this.token = result;
          console.log(this.token);
          this.showCompletePayment=true;
        } else if (result.error) {
          // Error creating the token
          this.showCompletePayment = false;
          console.log(result.error.message);
        }
      });
  }

  completePayment(){
    // const name = this.stripeTest.get('name').value;
    const amount = 100.00;
    const options = {};
    const payReq = new PayRequest();
    //payReq.token = this.token;
    //payReq.amount_money.amount=100.00;
    //const paymentIntent: ConfirmPaymentIntentOptions;
    console.log("In  complete");
    this.stripeService.confirmPaymentIntent(this.token.token.id).subscribe(result => {
      console.log("Payment  Intent Confirmation:  "+result);
    });


   // this.paymentService.completePayment(payReq);
  }
}