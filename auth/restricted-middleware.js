const secrets = require('../secrets/secrets.js')

const jwt = require("jsonwebtoken");

// checking user roles since instructor users
// should still have access to client user endpoints,
// but client users shouldn't have access to instructor endpoints.

function restrict() {
  return async (req, res, next) => {
    const authError = {
      message: "Invalid credentials",
    };
    try {
      // manually pulling the token that got sent from the client's cookie jar
      const token = req.headers.authorization;
      if (!token) {
        console.log("token exists", token);
        return res.status(401).json(authError);
      }
      // checks to make sure the signature is valid and the token is not expired
      jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
        if (err) {
          console.log(err);
          return res.status(401).json(authError);
        }
        next();
      });
    } catch (err) {
      next(err);
    }
  };
}
module.exports = restrict;