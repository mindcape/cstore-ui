import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { Cart } from '../models/cart';
import { CartItem } from '../models/CartItem';
import  AppState,{initialState } from '../models/AppState';

const initializeState = initialState();

const reducer = createReducer(
    initializeState,
    on(CartActions.GetCartAction,state=>state),
    on(CartActions.AddCartItemAction,(state:AppState,ci: {cartId:number,cartItem:CartItem})=>{
        return {...state,cart:{...state.cart,cartItems:[...state.cart.cartItems,ci.cartItem]}}
    })
)

export function CartReducer(
    state:AppState | undefined,
    action:Action
):AppState{
    return reducer(state,action);
}