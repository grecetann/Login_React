import { ActionTypes } from "../constants/action-type";

const initialState = {
  value: "",
};
/** First identifer the action of type then we store the data */
export const submitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_SUBMIT:{
      console.log(action.payload)
      return { ...state, value:action.payload};
    }
     
      
    default:
      return state;
  }
};