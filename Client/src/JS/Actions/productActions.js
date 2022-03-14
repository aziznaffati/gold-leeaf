import axios from "axios";
import {
  ADD_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCESS,
  DELETE_PRODUCT_FAIL,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_LOAD,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCT_SUCESS,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  EDIT_PRODUCT_SUCESS,
  EDIT_PRODUCT_FAIL,
} from "../ActionTypes/ProductActionTypes";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOAD });
  try {
    let result = await axios.get(`api/products/`);
    dispatch({
      type: GET_PRODUCTS_SUCESS,
      payload: result.data.listProducts,
    });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response.data });
  }
};
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    await axios.post("/api/products/", newProduct);

    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data });
  }
};
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await axios.delete(`/api/products/${productId}`);
    dispatch({ type: DELETE_PRODUCT_SUCESS });
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: error.response.data });
  }
};
export const getProduct = (productId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD });
  try {
    let result = await axios.get(`/api/products/${productId}`);
    dispatch({ type: GET_PRODUCT_SUCESS, payload: result.data.productToFind });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error.response.data });
  }
};

export const toggleTrue = () => {
  return { type: TOGGLE_TRUE };
};
export const toggleFalse = () => {
  return { type: TOGGLE_FALSE };
};

export const editProduct = (productId, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/products/${productId}`, newProduct);
    dispatch({ type: EDIT_PRODUCT_SUCESS });
    dispatch(getProducts());
    // window.location.replace("/");
  } catch (error) {
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: error.response.data });
      }
};
