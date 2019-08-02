const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/keys").jwtSecret;

//@route  POST api/auth/signup
//@desc     register new users
//@access   Public
router.post("/signup", function(req, res, next) {
  console.log(req.body);
  const { username, email, password, passwordConfirm } = req.body;

  // simple flied valedation
  if (!username || !email || !password || !passwordConfirm) {
    console.log(" validation is wrong ");
    res.status(400).json({
      msg: "plz enter all flied"
    });
  }

  // check for existing user
  UserModel.findOne({ email: email }).then(user => {
    if (user) return res.status(400).json({ msg: "user email exist" });
    //contines if user not exist
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    // create salt and hash
    brcypt.genSalt(10, (error, salt) => {
      brcypt.hash(newUser.password, salt, (error, hash) => {
        if (error)
          // throw error;
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
              if (err) throw console.log(`cannot jwt ${err}`);
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

// router.post("/signup", (req, res) => {
//   const { email, password } = req.body;
//   //console.log(req.body);
//   console.log(`my name is ${email}  pass: ${password}`);

//   //Simple validation
//   if (email || password) {
//     return res.status(401).json({ msg: "Please enter all fields" });
//   }
//   // res.status(200).json({
//   //   newUser: req.body
//   // });
// });
module.exports = router;
