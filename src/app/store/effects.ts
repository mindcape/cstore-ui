import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { FruitsService } from '../fruits.service';
// import { CartService } from '../cart.service'

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
  //   ofType(ActionTypes.LoadCartSuccess),
  //   mergeMap(() => 
  //     this.cartService.getCartItems().pipe(
  //       map(fruits => {
  //         return { type: ActionTypes.LoadSuccess, payload: fruits};
  //       }),
  //       catchError(() => EMPTY)
  //     )
  //   )
  // )

  constructor(
    private actions$: Actions,
    private fruitsService: FruitsService
    //,private cartService : CartService
  ) {}
}
