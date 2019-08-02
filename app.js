const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //we dont need body partser victor should remove from package.json
const logger = require("morgan");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("db is conneted"))
  .catch(err => console.log("do someting db not work" + err));

// init endpoint
const firstEP = require("./Api/routes/index");
const PostRoute = require("./Api/routes/postRoute");
// auth endpoint
const authRouteEP = require("./Api/routes/auth");
const authLogin = require("./Api/routes/authLogin");
// user setting and profile endpoint
const userSetting = require("./Api/routes/setting");
const app = express();

// view engine setup
//end view setup

app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount endpoint
app.use("/", firstEP);
app.use("/api", PostRoute);
app.use("/api/setting", userSetting);
app.use("/api/loadUser", require("./Api/routes/loadUser"));
app.use("/api/auth", authRouteEP);
app.use("/api/auth", authLogin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
