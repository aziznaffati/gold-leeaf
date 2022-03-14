import {
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT_FAIL,
  EDIT_PRODUCT_FAIL,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCESS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../ActionTypes/ProductActionTypes";

const initState = {
  productsToFind: [],
  load: false,
  errors: null,
  productToFind: {},
  edit: false,
};
const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOAD:
      return { ...state, load: true };
    case GET_PRODUCTS_SUCESS:
      return { ...state, load: false, productsToFind: payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, load: false, errors: payload };
    case ADD_PRODUCT_FAIL:
      return { ...state, load: false, errors: payload };
    case DELETE_PRODUCT_FAIL:
      return { ...state, load: false, errors: payload };
    case GET_PRODUCT_LOAD:
      return { ...state, load: true };
    case GET_PRODUCT_SUCESS:
      return { ...state, load: false, productToFind: payload };
    case GET_PRODUCT_FAIL:
      return { ...state, load: false, errors: payload };
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    case EDIT_PRODUCT_FAIL:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default productReducer;
