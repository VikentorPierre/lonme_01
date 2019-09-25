import axios from "axios";
import { DELETE_POST, ADD_POST, GET_POSTS, POST_LOADING, CREATE_POST, GET_POST_DETAIL } from "./types";
import { returnErrors } from "./errorAction";

export const createPost = (newPost, history) => (dispatch, getState) => {
  axios.post("/api/post/createPost", newPost, tokenConfig(getState)).then(response => {
    dispatch({
      type: CREATE_POST,
      payload: response.data
    });
    history.push("/");
  }).catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status, "POST_CREATE_ERROR"))
  })
};

export const getPostDetail = (post_id) => async dispatch => {
  try {
    const res = await axios.get(`/api/post/p/${post_id}`)
    dispatch({
      type: GET_POST_DETAIL,
      payload: res.data
    })

  } catch (error) {
    console.log("error on getting post detail");
    // dispatch({
    //   type: GET_POST_DETAIL,
    //   payload: post_id
    // })
  }
};

// Get post
// export const getPost = id => async dispatch => {
//   try {
//     const res = await axios.get(`/api/posts/${id}`);

//     dispatch({
//       type: GET_POST,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };



///////////////////////////////////////////////////////////////////////////////////////////
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

// Get posts
// export const getPosts = (tag = '') => async dispatch => {
//   //let val = 'Advice'
//   dispatch(setPostLoading());
//   try {
//     const res = await axios.get(`/api/post/posts/${tag}`)
//     // const res = await axios.get('/api/post/posts/');

//     dispatch({
//       type: GET_POSTS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch(returnErrors(err.response.data, err.response.status, "GET_POSTS_ERROR"))
//     //console.log('error getting post ');
//     // dispatch({
//     //   //type: POST_ERROR,
//     //   payload: { msg: err.response.statusText, status: err.response.status }
//     // });
//   }
// };

export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  //console.log("fetching");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    );

  // when we make a call the call return a promise
  // we use the .then function to catch that promise
  // we pass the response to the dispatch callback
  //"proxy": "http://localhost:5000",

  // axios.get("/api/post/posts").then(response =>
  //   dispatch({
  //     type: GET_POSTS,
  //     payload: response.data
  //   })
  // );
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