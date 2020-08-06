
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartService } from 'src/app/cart/cart.service';
import * as CartActions from '../actions/cart.actions'
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';

@Injectable()
export class CartEffects{

    constructor(private cartService: CartService, private action$: Actions) {}

    GetCart$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.GetCartAction),
            mergeMap(action => 
                this.cartService.getCart(action.customerId,action.storeId).pipe(
                    map((data: Cart) => {
                        console.log("Cart loaded ", data.id, data.custId);
                      return CartActions.SuccessGetCartAction({ payload: data });
                    }),
                    catchError((error: Error) => {
                      return of(CartActions.ErrorCartAction(error));
                    })
                  )
            )

        )
    
    );


    AddCartItem$ : Observable<Action> = createEffect(()=>
        this.action$.pipe(
            ofType(CartActions.AddCartItemAction),
            mergeMap(action =>
                this.cartService.addItemToCart(action.cartId,action.cartItem).pipe(
                    map((data:CartItem) => {
                        return CartActions.SuccessAddCartItemAction();
                    }),
                    catchError((error:Error)=>{
                        return of(CartActions.ErrorCartAction(error));
                    })
                )
            )
        )
    );
}