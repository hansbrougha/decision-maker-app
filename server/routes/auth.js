// import express from "express";
// import { signin, signout } from "../controllers/auth.js";
const express = "express";
const { signin, signout } = require("../controllers/auth.js");

module.exports = router = express.Router();

router.route("/auth/signin").post(signin);

router.route("/auth/signout").get(signout);
