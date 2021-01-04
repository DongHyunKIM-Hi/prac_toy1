import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./Counter";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
