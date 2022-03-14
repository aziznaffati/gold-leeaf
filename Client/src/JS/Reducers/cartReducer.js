import {
  GET_CART_LOAD, GET_CART_SUCESS, GET_CART_FAIL, ADD_CART_FAIL, ADD_CART_SUCESS
  , DELETE_CART_SUCESS, DELETE_CART_FAIL
} from '../ActionTypes/CartTypes';
const initState = {
  cartToFind: [],
  cart: [],
  load: false,
  errors: null,
}

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOAD:
      return { ...state, load: true };
    case GET_CART_SUCESS:
      return { ...state, load: false, cartToFind: payload.items };
    case ADD_CART_SUCESS:
      return {
        ...state, load: false, cart: payload
      }
    case GET_CART_FAIL:
      return { ...state, load: false, errors: payload };
    case ADD_CART_FAIL:
      return { ...state, load: false, errors: payload };
    default:
    case DELETE_CART_SUCESS:
      return {
        ...state, cart: payload
      }
    case DELETE_CART_FAIL:
      return { ...state, load: false, errors: payload }
      return state;
  }
};
export default cartReducer;