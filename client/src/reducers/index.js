import { combineReducers } from "redux";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import profile from "./profileMeta";
import commentReducer from "./commentReducer";


export default combineReducers({
  posts: postReducer,
  error: errorReducer,
  auth: authReducer,
  profile_meta: profile,
  comment: commentReducer
});
