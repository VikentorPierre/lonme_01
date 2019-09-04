import { combineReducers } from "redux";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import userInfo from "./userInfo";

export default combineReducers({
  posts: postReducer,
  error: errorReducer,
  auth: authReducer,
  userInfo: userInfo
});
