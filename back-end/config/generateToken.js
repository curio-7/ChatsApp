//jwt is used to authorize our user in backend
//so jwt generate a unique token which is send to backend which will verify it and get back to user.

const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;