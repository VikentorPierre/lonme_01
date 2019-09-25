import {
  USER_INFO_LOADING,
  USER_INFO_GET,
  LOGOUT_SUCCESS
} from "../actions/types";

const initialState = {
  isLoading: false,
  profile_meta: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_INFO_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_INFO_GET:
      return {
        ...state,
        profile_meta: action.payload,
        isLoading: false
      };
    case LOGOUT_SUCCESS:
      return {
        profile_meta: {}
      };

    default:
      return {
        ...state
      };
  }
}
