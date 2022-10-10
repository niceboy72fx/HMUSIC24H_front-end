import { combineReducers } from "redux";
import { GetListMusicReducer } from "./getListMusic";
import { GetSearchReducer } from "./searchReducer";
const RootReducer = combineReducers({
  GetListMusicReducer,
  GetSearchReducer,
});
export default RootReducer;
