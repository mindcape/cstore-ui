import { Action } from '@ngrx/store';
import { Product } from './models/Product';




export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadCartItems = 'Load Cart Items from cart',
  LoadSuccess = '[Products] Load success',
  LoadCartSuccess = '[Products] Load Cart Success',
  AddPaymentInit = 'Payment Initiation',
  LoadPaymentInit = 'Load Payment'
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class GetCartItems implements Action {
  readonly type = ActionTypes.LoadCartItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadCartItems implements Action {
  readonly type = ActionTypes.LoadCartSuccess;

  constructor(public payload: Product[]) {}
}

export  class AddPaymentInit implements Action {
  readonly type = ActionTypes.AddPaymentInit;

  constructor(public payload: String){}
}

export class LoadPaymentInit implements Action {
  readonly type = ActionTypes.LoadPaymentInit;
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | LoadCartItems | GetCartItems | AddPaymentInit | LoadPaymentInit;
