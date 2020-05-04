import { ActionsUnion, ActionTypes } from './actions';


export const initialState = {
  items: [],
  cart: [],
  initPay : String 
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  console.log(action);
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart : [...state.cart, action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.cart.filter(item => item.name !== action.payload.name)]
      };

    case ActionTypes.LoadCartSuccess:
      console.log(...action.payload);
      return {
        ...state,
        cart: [...action.payload]
      };

      case ActionTypes.AddPaymentInit:
        console.log(...action.payload);
        return {
          ...state,
          initPay : action.payload
      };
      default:
        return state;
  }
}
