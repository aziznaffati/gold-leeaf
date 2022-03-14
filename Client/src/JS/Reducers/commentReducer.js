import { GET_COMMENT_LOAD, GET_COMMENT_SUCESS, GET_COMMENT_FAIL ,ADD_COMMENT_FAIL , ADD_COMMENT_SUCESS ,
  DELETE_COMMENT_FAIL , DELETE_COMMENT_SUCESS , GET_COMMENTS_LOAD , GET_COMMENTS_SUCESS , GET_COMMENTS_FAIL
} from '../ActionTypes/CommentTypes';


const initState = {
    commentToFind: [],
    comment: [],
    load: false,
    errors: null,
    comments: [],
  }
  
  const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_COMMENT_LOAD:
        return { ...state, load: true };
      case GET_COMMENT_SUCESS:
        return { ...state, load: false, commentToFind: payload.items };
      case ADD_COMMENT_SUCESS:
        return {
          ...state, load: false, comment: payload
        }
      case GET_COMMENT_FAIL:
        return { ...state, load: false, errors: payload };
      case ADD_COMMENT_FAIL:
        return { ...state, load: false, errors: payload };
        case GET_COMMENTS_LOAD:
          return { ...state, load: true };

      case GET_COMMENTS_SUCESS:
          return { ...state, load: false, comments: payload };

      case GET_COMMENTS_FAIL:
          return { ...state, load: false, errors: payload };
      case DELETE_COMMENT_SUCESS:
        return {...state, comments: payload };
      case  DELETE_COMMENT_FAIL:
        return { ...state, load: false, errors: payload }
      default:
        return state;
    }
  };
  export default cartReducer;