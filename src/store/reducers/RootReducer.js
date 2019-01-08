import { combineReducers } from "redux";
import { dataReducer } from "./data/DataReducer";

export default combineReducers({
  data: dataReducer
});
