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

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", pollsRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  }
});

app.listen(process.env.PORT || 4000, function () {
  console.log(`🚀 at port ${config.port}`);
});
