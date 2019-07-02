const express = require("express");
const router = express.Router();

/* GET Profile page. */
router.get("/", function(req, res, next) {
  res.json({
    message: "tesing 1 2 3 testing"
  });
});

module.exports = router;
