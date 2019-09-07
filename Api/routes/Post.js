const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const { check, validationResult } = require("express-validator/check");
//models
const UserModel = require("../models/User");
const PostModel = require("../models/Post");

// routes

//@route  POST api/createPost
//@desc   Create a post
//@access Private
router.post("/createPost", isAuthenticated, async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");

    const newPost = new PostModel({
      title: req.body.title,
      tags: req.body.tag,
      text: req.body.text,
      user: req.user.id,
      name: user.name
    });
    const post = await newPost.save();

    console.log(post);

    res.status(200).json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error " + ": fail to create new post or save");
  }
});
// @route    GET api/post/posts
// @desc     Get all posts. Posts list page
// @access   Public
router.get("/posts/:tag?", async (req, res) => {
  try {
    //console.log(req.params.tag);

    if (req.params.tag !== undefined) {
      const posts = await PostModel.find({ tags: req.params.tag })
      return res.status(200).json(posts);
    } else {

      const posts = await PostModel.find()
      return res.status(200).json(posts);
    }
    //const posts = await PostModel.find({ tags: "others" })
    // const posts = await PostModel.find().sort({ date: -1 });
    //res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error " + ": Get all posts is not working");
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID. post detail page.
// @access   Public
router.get("/p/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
