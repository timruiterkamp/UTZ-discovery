import { combineReducers } from "redux";
import { homeReducer } from "./home/HomeReducer";

export default combineReducers({
  home: homeReducer
});
