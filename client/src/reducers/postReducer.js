import {
  DELETE_POST,
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  CREATE_POST
} from "../actions/types";
const initialState = {
  //items: [],
  posts: [],
  //post: null,
  // error: {},
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case GET_POSTS:
      //console.log("state" + state.item);
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.payload)
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    // case ADD_POST:
    //   return {
    //     ...state,
    //     posts: [action.payload, ...state.items]
    //   };
    default:
      return state;
  }
}
