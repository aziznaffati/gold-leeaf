import {
    GET_FILITER
  } from "../ActionTypes/FiliterTypes";
  
  const initState = {
    nameProduct : "",
    load: false,
};
  const filiterReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_FILITER:
        return { ...state , load: true , nameProduct: payload };
        default:
            return state;
        }
      };
    export default filiterReducer;