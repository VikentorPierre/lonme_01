import { GET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT_LIKES } from "../actions/types";
const initialState = {
    comments: [],
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }

        default:
            return state;
    }
}