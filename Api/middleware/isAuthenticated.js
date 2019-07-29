const jwt = require("jsonwebtoken");
const jwtSecret = require("../../config/keys").jwtSecret;

function isAuthenticated(req, res, next) {
  //first try to get a token inside header

  const token = req.header("x-auth-token");

  //check if we realy do have token
  if (!token) return res.status(401).json({ msg: "no token access denied" });

  try {
    //verify token
    const decoded = jwt.verify(token, jwtSecret);
    //add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "token is not valid" });
  }
}

module.exports = isAuthenticated;
