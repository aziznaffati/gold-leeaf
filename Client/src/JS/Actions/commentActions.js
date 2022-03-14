import axios from 'axios';
import { GET_COMMENT_LOAD, GET_COMMENT_SUCESS, GET_COMMENT_FAIL ,ADD_COMMENT_FAIL , ADD_COMMENT_SUCESS ,
  DELETE_COMMENT_FAIL , DELETE_COMMENT_SUCESS , GET_COMMENTS_SUCESS, GET_COMMENTS_FAIL , GET_COMMENTS_LOAD 
 } from '../ActionTypes/CommentTypes';


export const getComment = (id) => async (dispatch) => {
    dispatch({ type: GET_COMMENT_LOAD });
    try {
      let result = await axios.get(`/api/comment/${id}`);
      dispatch({
        type: GET_COMMENT_SUCESS,
        payload: result.data
      });
    } catch (error) {
      dispatch({ type: GET_COMMENT_FAIL, payload: error.response.data });
    }
  };
  export const AddComment = (id, newComment) => async (dispatch) => {
    try {
      let result =  await axios.post(`/api/comment/${id}`, newComment);
      dispatch({
        type: ADD_COMMENT_SUCESS,
        payload: result.data
      });
      dispatch(getComment(id))
    } catch (error) {
      dispatch({ type: ADD_COMMENT_FAIL, payload: error.response.data });
    }
  };
  export const getComments = () => async (dispatch) => {
    dispatch({ type: GET_COMMENTS_LOAD });
    try {
      let result = await axios.get(`api/comment/comment`);
      dispatch({
        type: GET_COMMENTS_SUCESS,
        payload: result.data.listProducts,
      });
    } catch (error) {
      dispatch({ type: GET_COMMENTS_FAIL, payload: error.response.data });
    }
  };

  export const deleteComment = (productId , userId ) => async (dispatch) => {
    try {
      await axios.delete(`/api/comment/comment/${productId}/${userId}`);
      window.location.reload()
    } catch (error) {
      dispatch({ type: DELETE_COMMENT_FAIL, payload: error.response.data });
    }
  };