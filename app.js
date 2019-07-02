const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("db is conneted"))
  .catch(err => console.log(err));

// init endpoint
const testEP = require("./Api/testEP");
const app = express();

// view engine setup
//end view setup

app.use(logger("dev"));
app.use(express.json());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount endpoint
app.use("/api", testEP);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

module.exports = app;
