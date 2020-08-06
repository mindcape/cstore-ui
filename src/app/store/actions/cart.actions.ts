import { createAction, props, Action } from '@ngrx/store';
import { Product } from '../models/Product';
import { CartItem } from '../models/CartItem';
import { Cart } from '../models/cart';

export const GetCartAction = createAction('Cart - Get Cart',props<{customerId:number,storeId:number}>());
export const SuccessGetCartAction = createAction('[Cart] - Get Cart Success',props<{payload:Cart}>());
export const AddCartItemAction = createAction('[CartItem] Add to Cart',props<{cartId: number, cartItem: CartItem}>());
export const SuccessAddCartItemAction = createAction('[CartItem] Added to Cart Success');
// export const GetProductsAction=createAction('[Product] - Get Products');
// export const BeginGetProductsAction=createAction('[Products]-Begin Get Products');
// export const SuccessGetProdutsAction=createAction('[Products]-Success Get Products',props<{payload:Product[]}>());
 export const ErrorAction = createAction('Action - Error', props<Error>());
 export const ErrorCartAction = createAction('[Cart] - Error', props<Error>());

