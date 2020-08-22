const dotenv = require("dotenv");
dotenv.config();

module.exports = config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET,
  mongoURI: process.env.MONGODB_URI,
};
