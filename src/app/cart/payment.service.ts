import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry }  from 'rxjs/operators';
import { TokenResult } from 'ngx-stripe';

export class SqarePayment{
  payment: Payment;
  location_id: string;
  order_id : string;
  receipt_number: string;
  billing_address: BillingAddress;
  totalMoney: AmountObject;
}

export class BillingAddress {
  address_line_1: string;
  country: string
}


export class Payment {
  id: string;
  created_at: Date;
  updated_at: Date;
  amount_money: AmountObject;
  status: string;
  source_type: string;
  card_details: CartDetails;
  entry_method : string;
  cvv_status: string;
  avs_status: string;
  statement_description: string;
}

export interface CartDetails {
  status: string;
  card : Card;
}

export class Card{
  card_brand : string;
  last_4 : string;
  exp_month: number;
  exp_year: number;
  fingerprint : string;
  card_type : string;
  prepaid_type: string;
  bin : string;
}

export class AmountObject {
  amount : number;
  currency : string;
}

export class PayRequest {
  amount_money : AmountObject;
  token: TokenResult;
}{};

export class StripePayIntent {
  items: any;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {     

  }

  completeSquarePayment(req: PayRequest) {
    // const headers = { 'Square-Version':'2020-04-22', 'Authorization':'Bearer EAAAEKFuADPoix81HqCNGDeuuLcPbJN_33i3xQ_5JubrkqROmEEa4ItrX4AqFylr',
    //  'Content-Type':'application/json','Access-Control-Allow-Origin': '*'};
    const headers = {};
    return this.http.post("/payment",req,{headers});
  }

  listPayment (){

  }

  createStripePayIntent(req: StripePayIntent){
    const headers = {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'};
    return this.http.post("/api/payments/stripe",req,{headers});
  }

  
}
