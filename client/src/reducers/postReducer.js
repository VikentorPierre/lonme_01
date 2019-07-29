import {
  DELETE_POST,
  ADD_POST,
  GET_POSTS,
  POST_LOADING
} from "../actions/types";
const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      //console.log("state" + state.item);
      return {
        ...state,
        items: action.payload,
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
