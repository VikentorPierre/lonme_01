const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/keys").jwtSecret;

//@route  GET api/auth/signup
//@desc     register new users
//@access   Public
router.post("/signup", function(req, res, next) {
  const { username, email, password } = req.body; // decontruct value

  // simple flied valedation
  if (!username || !email || !password) {
    res.status(400).json({
      msg: "plz enter all flied"
    });
  }
  // check for existing user
  UserModel.findOne({ email: email }).then(user => {
    if (user) return res.status(400).json({ msg: "user email exist" });
    //contines if user not exist
    const newUser = new UserModel({
      username: username,
      email: email,
      password: password
    });

    // create salt and hash
    brcypt.genSalt(10, (error, salt) => {
      brcypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser.save().then(user => {
          //jwt crate jwt token
          //first arg is payload things to send back inside token
          //second is the jwtSecret
          //third is option
          // last is the callback func
          jwt.sign(
            { id: user.id, username: user.username },
            jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token: token,
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
