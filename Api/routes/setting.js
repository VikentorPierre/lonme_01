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
router.get("/", isAuthenticated, function(req, res, next) {
  UserModel.findById(req.user.id)
    .select("-password")
    .then(user => res.status(200).json(user));
});

module.exports = router;
