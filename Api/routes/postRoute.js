const express = require("express");
const router = express.Router();

const Post = require("../models/TesPost");

//@route GET api/home
//@desc  get all Post from db
//@access Public

router.get("/allpost", (req, res) => {
  // use model and sort doc
  Post.find().then(items => res.json(items));
});

//@route GET api/home
//@desc  get all Post from db
//@access Public

router.get("/onepost/:id", (req, res) => {
  // use model and sort doc
  Post.findOne({ _id: req.params.id }).then(items => res.json(items));
});

//@route POST api/createPost
//@desc  get all Post from db
//@access Public
router.post("/createPost", (req, res, next) => {
  const newPost = new Post({
    text: req.body.text
  });
  newPost.save().then(doc => res.json(doc));
});

//@route Delate api/postdel
//@desc  Delete all Post from db
//@access Public
router.delete("/:item", (req, res, next) => {
  console.log(req.params.item);
  Post.findOne({ _id: req.params.item })
    .then(item => item.remove.then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
