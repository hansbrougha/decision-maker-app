// import express from "express";
// import {
//   create,
//   findAll,
//   findAllById,
//   update,
//   remove
// } from "../controllers/pollsController.js";
const express = require("express");
const {
  create,
  findAll,
  findAllById,
  update,
  remove
} = require("../controllers/pollsController.js");

const router = express.Router();

router.route("/api/polls").post(create);

router.route("/api/polls").get(findAll).post(create);

router.route("/api/polls/:pollId").get(findAllById).put(update).delete(remove);

router.param("pollId", findAllById);

module.exports = router;
