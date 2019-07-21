const express = require("express");
const router = express.Router();
router.get("/", function(req, res, next) {
  res.json({
    Mesaage: "Welcome to the api"
  });
});

module.exports = router;
