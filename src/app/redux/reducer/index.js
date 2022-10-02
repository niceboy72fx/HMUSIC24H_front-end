import { combineReducers } from "redux";
import { GetListMusic } from "../action/playMusic";
const RootReducer = combineReducers({
  GetListMusic,
});
export default RootReducer;
