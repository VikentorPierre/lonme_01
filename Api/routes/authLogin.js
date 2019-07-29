const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/keys").jwtSecret;

//@route  GET api/auth/login
//@desc     login users
//@access   Public
router.post("/login", function(req, res, next) {
  const { email, password } = req.body; // decontruct value

  // simple flied valedation
  if (!email || !password) {
    res.status(400).json({
      msg: "plz enter all flied"
    });
  }
  // check if user exists inside our db
  UserModel.findOne({ email: email }).then(user => {
    if (!user) return res.status(400).json({ msg: "user do not exist" });

    //validate our password
    brcypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({ msg: "password was not correct" });
      // if password match contines
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
      ); //end sign
    });
  });
});

module.exports = router;
