import axios from 'axios';
import { returnErrors } from './errorActions';
import {
  GET_ORDERS, CHECKOUT, ORDERS_LOADING
  , GET_ORDERS_SUCESS, GET_ORDERS_FAIL, GET_ORDERS_LOAD , DELETE_ORDER_SUCESS , DELETE_ORDER_FAIL
} from '../ActionTypes/OrderTypes';


export const getOrder = (id) => dispatch => {

  dispatch(setOrdersLoading());

  axios.get(`/api/order/${id}`)
    .then(res => dispatch({
      type: GET_ORDERS,
      payload: res.data.listProducts
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const checkout = (id, source) => dispatch => {
  axios.post(`/api/order/${id}`, { source })
    .then(res => dispatch({
      type: CHECKOUT,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}



export const getOrders = () => async (dispatch) => {
  dispatch({ type: GET_ORDERS_LOAD });
  try {
    let result = await axios.get(`api/order`);
    dispatch({
      type: GET_ORDERS_SUCESS,
      payload: result.data.listProducts,
    });
  } catch (error) {
    dispatch({ type: GET_ORDERS_FAIL, payload: error.response.data });
  }
};
export const deleteOrder = (orderId) => async (dispatch) => {
  try {
    await axios.delete(`/api/order/${orderId}`);
    dispatch({ type: DELETE_ORDER_SUCESS });
    dispatch(getOrders());
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAIL, payload: error.response.data });
  }
};


export const setOrdersLoading = () => {
  return {
    type: ORDERS_LOADING
  }
}