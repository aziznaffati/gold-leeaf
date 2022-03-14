import { GET_ORDERS, CHECKOUT, ORDERS_LOADING, GET_ORDERS_SUCESS, GET_ORDERS_FAIL, GET_ORDERS_LOAD 
, DELETE_ORDER_SUCESS , DELETE_ORDER_FAIL} from '../ActionTypes/OrderTypes';

const initialState = {
    orders: [],
    loading: false,
    errors: [],
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_LOAD:
            return { ...state, loading: true };

        case GET_ORDERS_SUCESS:
            return { ...state, loading: false, orders: action.payload };

        case GET_ORDERS_FAIL:
            return { ...state, loading: false, errors: action.payload };

        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            }

        case CHECKOUT:
            return {
                ...state,
                orders: [action.payload, ...state.orders]
            }

        case ORDERS_LOADING:
            return {
                ...state,
                loading: true
            }
            case DELETE_ORDER_SUCESS:
                return {
                  ...state, orders: action.payload,
                }
              case DELETE_ORDER_FAIL:
                return { ...state, loading: false, errors: action.payload }
        default:
            return state;
    }
}

export default orderReducer