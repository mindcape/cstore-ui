import { createAction, props, Action } from '@ngrx/store';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';
import { Cart } from '../models/cart';




export enum ActionTypes {
  CreateCart = 'Create Cart',
  AddToCart = '[CartItem] Add CartItem to cart',
  RemoveCartItem = '[CartItem] Remove CartItem from cart',
  LoadCartItems = '[CartItem] Load Cart Items from cart',
  UpdateCartItems =  '[CartItem] update CartItems',
  LoadCart = 'Load Cart Success',
  LoadItems = '[Products] Load Product items from server',
  LoadSuccess = '[Products] Load success',
  AddPaymentInit = 'Payment Initiation',
  LoadPaymentInit = 'Load Payment'
}


export class CreateCart implements Action {
  readonly type = ActionTypes.CreateCart;

  constructor(public payload: Cart) {}
}

export class AddToCart implements Action {
  readonly type = ActionTypes.AddToCart;

  constructor(public payload: CartItem) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class GetCartItems implements Action {
  readonly type = ActionTypes.LoadCartItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.RemoveCartItem;

  constructor(public payload: CartItem) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadCartItems implements Action {
  readonly type = ActionTypes.LoadCartItems;

  constructor() {}
}

export class LoadCart implements Action {
  readonly type = ActionTypes.LoadCart;

  constructor() {}
}

export  class AddPaymentInit implements Action {
  readonly type = ActionTypes.AddPaymentInit;

  constructor(public payload: String){}
}

export class LoadPaymentInit implements Action {
  readonly type = ActionTypes.LoadPaymentInit;
}

export type ActionsUnion = CreateCart | AddToCart | RemoveFromCart | LoadItems | GetItems | LoadCartItems | GetCartItems | AddPaymentInit | LoadPaymentInit | LoadCart;
