import axios from "axios";
import { DELETE_POST, ADD_POST, GET_POSTS, POST_LOADING } from "./types";

// export const getPosts = () => {
//   console.log("action dispatch");
//   return {
//     type: GET_POSTS
//   };
// };

// export function getPosts() {
//   return {
//     type: GET_POSTS
//   };
// }
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  //console.log("fetching");
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => res.json())
  //   .then(posts =>
  //     dispatch({
  //       type: GET_POSTS,
  //       payload: posts
  //     })
  //   );

  // when we make a call the call return a promise
  // we use the .then function to catch that promise
  // we pass the response to the dispatch callback

  axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>
    dispatch({
      type: GET_POSTS,
      payload: response.data
    })
  );
};

// dispatch is thunk
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// export const getPosts = () => dispatch => {
//   dispatch({
//     type: GET_POSTS
//   });
// };
//@ type tells the action to take
//@payload pass the arg to that reducer
export const deletePosts = id => {
  return {
    type: DELETE_POST, // type is the action that the reducer is going to take
    payload: id // payload is the paremeters pass to the reducer
  };
};
