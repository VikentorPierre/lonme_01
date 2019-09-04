const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const UserModel = require("../models/User");
// const brcypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const jwtSecret = require("../../config/keys").jwtSecret;

//@route  GET api/setting
//@desc     get the setting for a user
//@access   private: a user needs to be login in
router.get("/", isAuthenticated, async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id).select(
      " -_id -password -email -typeOfStrategy -isDeleted -register_date -__v"
    );
    if (!user) {
      return res.status(400).json({ msg: "there is no user with that id " });
    }
    console.log(user);
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("error on getting user ");
  }
});
// router.get("/kkkkjj", isAuthenticated, async (req, res, next) {
//   // UserModel.findById(req.user.id)
//   //   .select("-password")
//   //   .then(user => res.status(200).json(user));
// });

module.exports = router;
