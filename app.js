const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDB = require("./config/dbConnect");

//app
const app = express();

// Connect Database
connectDB();

// Init MiddleWare

app.use(logger("dev"));
app.use(express.json({ extended: false }));
//app.use(bodyParser.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount endpoint // Define Routes
app.use("/", require("./Api/routes/index")); // my test route
app.use("/api/post", require("./Api/routes/Post")); // localhost/post // all post
app.use("/api/comment", require("./Api/routes/Comment"));

//get user when component mount
app.use("/api/loadUser", require("./Api/routes/loadUser"));
// get and set user profile in redux store
app.use("/api/profile", require("./Api/routes/profileMeta"));
// auth 
app.use("/api/auth", require("./Api/routes/auth"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
