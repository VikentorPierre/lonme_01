import axios from "axios";
import { returnErrors } from "./errorAction";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// check if we have a token inside the header and return the user for that token
// second arg :getState: we use it to get access to the token in localstorage
export const loadUser = () => (dispatch, getState) => {
  // set our user loading var to true by dispatch USER_LOADING
  dispatch({ type: USER_LOADING }); // we call the USER_LOADING reducer

  // pass this token with our request
  axios
    .get("/api/loadUser", tokenConfig(getState))
    .then(response =>
      dispatch({
        type: USER_LOADED,
        payload: response.data
      })
    )
    .catch(error => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Setup config/headers and token
export const tokenConfig = getState => {
  const token = getState().auth.token; // goes to the auth reducer and grab the token there and set it to the const

  //setup our axios header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //if totken exist then add to header
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
