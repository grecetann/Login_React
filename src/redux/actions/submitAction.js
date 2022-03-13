import { ActionTypes } from "../constants/action-type";

/** this action call using dispatch call the albumReducer to store the payload inside state */
export const submit = (email,password) => {
  console.log(email +"" + password);
  return {
    type: ActionTypes.GET_SUBMIT,
    payload:email,
  };
};