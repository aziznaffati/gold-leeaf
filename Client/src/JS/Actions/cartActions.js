import axios from 'axios';
import { GET_CART_LOAD, GET_CART_SUCESS, GET_CART_FAIL ,ADD_CART_FAIL , ADD_CART_SUCESS ,
  DELETE_CART_SUCESS , DELETE_CART_FAIL } from '../ActionTypes/CartTypes';



export const getCart = (id) => async (dispatch) => {
  dispatch({ type: GET_CART_LOAD });
  try {
    let result = await axios.get(`/api/cart/${id}`);
    // console.log({ result })
    // dispatch(getAuthUser())
    dispatch({
      type: GET_CART_SUCESS,
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: GET_CART_FAIL, payload: error.response.data });
  }
};
export const AddToCart = (id, newCart) => async (dispatch) => {
  try {
    let result =  await axios.post(`/api/cart/cart/${id}`, newCart);
    dispatch({
      type: ADD_CART_SUCESS,
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: ADD_CART_FAIL, payload: error.response.data });
  }
};
export const deletefromCart = (userId , prodId) => async (dispatch) => {
  try {
    let result =  await axios.delete(`/api/cart/cart/${userId}/${prodId}`);
    dispatch({
      type:  DELETE_CART_SUCESS ,
      payload: result.data
    });
  } catch (error) {
    dispatch({ type: DELETE_CART_FAIL, payload: error.response.data });
  }
};

