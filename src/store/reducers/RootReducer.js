import { combineReducers } from "redux";
import { dataReducer } from "./data/DataReducer";
import { menuReducer } from "./menu/menuReducer";
import { compareReducer } from "./compare/CompareReducer";

export default combineReducers({
  data: dataReducer,
  sidebarMenu: menuReducer,
  compare: compareReducer
});
