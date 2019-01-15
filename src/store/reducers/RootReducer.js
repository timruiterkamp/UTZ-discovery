import { combineReducers } from "redux";
import { dataReducer } from "./data/DataReducer";
import { menuReducer } from "./menu/menuReducer";

export default combineReducers({
  data: dataReducer,
  sidebarMenu: menuReducer
});
