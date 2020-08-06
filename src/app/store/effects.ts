import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions/actions';
import { FruitsServiceService } from '../fruits.service';
import { PaymentService } from '../cart/payment.service';
import { CartService } from '../cart/cart.service';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadFruits$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.fruitsService.getAll().pipe(
        map(fruits => {
          return { type: ActionTypes.LoadSuccess, payload: fruits };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  // @Effect()
  // loadCart$ = this.actions$.pipe(
  //   ofType(ActionTypes.LoadCart),
  //   mergeMap(() => 
  //     this.cartService.getCart(this.authService.currentUserValue.id,1).pipe(
  //       map(cart => {
  //         return { type: ActionTypes.LoadSuccess, payload: cart};
  //       }),
  //       catchError(() => EMPTY)
  //     )
  //   )
  // )

  // @Effect()
  // loadPayInit$ = this.actions$.pipe(
  //   ofType(ActionTypes.LoadPaymentInit),
  //   mergeMap((action) => 
  //     this.paymentService.createStripePayIntent(action).pipe(
  //       map( payIntent => {
  //         return { type: ActionTypes.LoadPaymentInit, payload: payIntent};
  //       }),
  //       //catchError((err: Error) => of(new LoadPayInitError(err))),
  //     )
  //   )
  // )

  constructor(
    private actions$: Actions,
    private fruitsService: FruitsServiceService,
    private cartService: CartService,
    private authService: AuthenticationService,
    private paymentService : PaymentService
  ) {}
}
