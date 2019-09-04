const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");
const UserModel = require("../models/User");

//@route  GET api/setting
//@desc     get the user that is login
//@access   private: a user needs to be login in
router.get("/", isAuthenticated, function(req, res, next) {
  UserModel.findById(req.user.id)
    .select("-password")
    .then(user =>
      res.status(200).json({
        id: user.id,
        msg: "getting the user"
      })
    );
});

module.exports = router;
