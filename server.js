const express = require("express");
const cookieParser = require("cookie-parser");
const config = require("./server/config/index.js");
const userRoutes = require("./server/routes/user.js");
const authRoutes = require("./server/routes/auth.js");
const pollsRoutes = require("./server/routes/polls.js");

require("./server/config/dbConnection.js");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", pollsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  }
});

app.listen(process.env.PORT || 4000, function () {
  console.log(`🚀 at port ${config.port}`);
});
