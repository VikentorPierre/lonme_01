//route import
const express = require("express");
const router = express.Router();
//auth import
const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/keys").jwtSecret;
const { check, validationResult } = require("express-validator"); // validation

//@route  POST api/auth/signup
//@desc     register new users
//@access   Public
router.post(
  "/signup",
  [
    check("username", "username is required").isLength({ min: 1 }),
    check("username", "Please provide a longer username")
      .isLength({ min: 4 })
      .custom(username => {
        return UserModel.findOne({ username: username }).then(user => {
          if (user) {
            throw new Error(
              "this username has already been taking please pick another"
            );
          } else return username;
        });
      }),
    check("email", "Email is required").isLength({ min: 1 }),
    check("email", "Please provide a valid email address")
      .isEmail()
      .trim()
      .normalizeEmail()
      .custom(email => {
        return UserModel.findOne({ email: email }).then(user => {
          if (user) {
            throw new Error(
              "this email already exist please. please enter another"
            );
          } else return email;
        });
      }),
    check("password", "invalid password, password is to short")
      .isLength({ min: 4 })
      .custom((value, { req, loc, path }) => {
        if (value !== req.body.passwordConfirm) {
          // trow error if passwords do not match
          throw new Error("Passwords do not match");
        } else {
          return value;
        }
      })
  ],
  (req, res, next) => {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
      return `${msg}`;
    };
    const validatingerrors = validationResult(req).formatWith(errorFormatter);
    if (!validatingerrors.isEmpty()) {
      console.log(validatingerrors.mapped());
      res.status(400).json(validatingerrors.mapped());
    } else {
      const hashpass = bcrypt.hashSync(req.body.passwordConfirm, 10);
      new UserModel({
        typeOfStrategy: "manually",
        username: req.body.username,
        email: req.body.email,
        password: hashpass
      }).save((err, user) => {
        if (err) {
          console.log("error in saving new user in db");
          return res.status(400).end();
        } // check error on saving new user
        jwt.sign(
          { id: user.id, username: user.username },
          jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw console.log(`cannot jwt ${err}`);
            res.status(200).json({
              token: token,
              user: {
                id: user.id,
                username: user.username
                // email: user.email
              }
            });
          }
        ); //end jwt sign
      });
    } //end validation else
  } //end req res
); //end signup

router.post(
  "/login",
  [
    check("email", "Email is required").isLength({ min: 1 }),
    check("email", "Please provide a valid email address")
      .isEmail()
      .trim()
      .normalizeEmail(),
    check("password", "password is required")
      .isLength({ min: 1 })
      .trim()
  ],
  (req, res, nect) => {
    const errorFormatter = ({ msg }) => {
      return `${msg}`;
    };
    const validatingerrors = validationResult(req).formatWith(errorFormatter);
    const { email, password } = req.body;
    if (!validatingerrors.isEmpty()) {
      res.status(400).json(validatingerrors.mapped());
    } else {
      UserModel.findOne({ email: email }).then(user => {
        if (user) {
          // if email right and have a user check if password is right
          if (bcrypt.compareSync(password, user.password)) {
            //password is right now sign our jwt token
            jwt.sign(
              { id: user.id, username: user.username },
              jwtSecret,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw console.log(`cannot jwt ${err}`);
                res.status(200).json({
                  token: token,
                  user: {
                    id: user.id,
                    username: user.username
                    // email: user.email
                  }
                });
              }
            ); //end jwt sign
          } else {
            res.status(401).json({ password: "the password is incorect" });
          } //
        } // email is right
        else {
          res.status(401).json({ email: "the Email is incorect" });
        } // else email is wrong
      });
    }
  }
); //end post
module.exports = router;
