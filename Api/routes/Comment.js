const express = require("express");
const router = express.Router();
// models
const CommentModel = require("../models/comments");
const UserModel = require("../models/User");
const isAuthenticated = require("../middleware/isAuthenticated");



// @route    GET api/comments
// @desc     Get all comments for a post
// @access   Public
/*
    mmake a express api endpoint that gonna handle this request plz.
*/
router.get("/:post_id", async (req, res, next) => {
    try {
        const comment = await CommentModel.findById(req.params.post_id)
        res.status(200).json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error " + ": Get all Comments is not working");
    }
})
// @route   POST api/comment/addComment
// @desc    Add a new comment to a post
// @access  Private
/*
    user needs to me login to access this point.

*/
router.post("/addComment", isAuthenticated, async (req, res, next) => {
    try {
        const newComment = new CommentModel({
            userId: req.user.id,
            postId: req.body.postId,
            username: req.user.username,
            text: req.body.text
        });
        const comment = await newComment.save();
        console.log(comment)
        res.status(200).json({ msg: 'success' })
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error " + ": Saving Comment is not working");
    }
})

module.exports = router