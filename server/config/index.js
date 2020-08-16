const dotenv = require("dotenv");
dotenv.config();

const pollConfig = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET,
  mongoURI: process.env.MONGODB_URI,
};

module.exports = pollConfig;
