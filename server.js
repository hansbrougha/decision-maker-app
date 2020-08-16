// import express from "express";
// import cookieParser from "cookie-parser";
// import config from "./server/config/index.js";
// import userRoutes from "./server/routes/user.js";
// import authRoutes from "./server/routes/auth.js";
// import "./server/config/dbConnection.js";

const express = require("express");
const cookieParser = require("cookie-parser");
const config = require("./server/config/index.js");
const userRoutes = require("./server/routes/user.js");
const authRoutes = require("./server/routes/auth.js");
require("./server/config/dbConnection.js");

const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);
app.use("/", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  }
});

app.listen(config.port, () => {
  console.log(`🚀 at port ${config.port}`);
});
