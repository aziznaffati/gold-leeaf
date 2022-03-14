import {GET_FILITER} from '../ActionTypes/FiliterTypes';
export const filiter = (value) => {
    return {

        type: GET_FILITER,
        payload:value
    }
}