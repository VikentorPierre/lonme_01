import { GET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT_LIKES } from "./types";
import { returnErrors } from "./errorAction";
import axios from "axios";
// @route    GET api/comment
// @desc     Get all comments for a post
// @access   Public
/*
    mmake a express api endpoint that gonna handle this request plz.
*/
export const getComments = (post_id) => async dispatch => {
    try {
        const res = await axios.get("/api/comment")
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status, "GET_COMMENTS_ERROR"))

    }
}

// @routes  POST api/comment/addComment
// @desc    create a new comment for a given post 
// @access  Private 
export const addComment = (newComment, history) => async (dispatch, getState) => {

    //axios.post("/api/comment/addComment", )
    try {
        const res = await axios.post(`/api/comment/addComment`, newComment, tokenConfig(getState))
        history.push("/");

    } catch (err) {
        console.log(err)
        //dispatch(returnErrors(err.response.data, err.response.status, "ADD_COMMENTS_ERROR"))
    }
}




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