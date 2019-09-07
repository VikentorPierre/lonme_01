import { combineReducers } from "redux";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import userInfo from "./userInfo";
import commentReducer from "./commentReducer";


export default combineReducers({
  posts: postReducer,
  error: errorReducer,
  auth: authReducer,
  userInfo: userInfo,
  comment: commentReducer
});
