import { combineReducers } from "redux";

import { submitReducer } from "./submitReducer";

const reducers = combineReducers({
  submitRed: submitReducer,
  
});
export default reducers;
