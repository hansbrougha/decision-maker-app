// import express from "express";
// import {
//   registerUser,
//   findUserById,
//   findUserProfile,
//   deleteUser,
//   updatePoll,
//   getAllUsers,
//   findPollById
// } from "../controllers/user.js";
// import {
//   create,
//   findAll,
//   findById,
//   update,
//   remove
// } from "../controllers/pollsController.js";

// // import them to protect routes
// import { requireSignin, hasAuthorization } from "../controllers/auth.js";

// import them to protect routes
const { requireSignin, hasAuthorization } = require("../controllers/auth.js");
const express = require("express");
const {
  registerUser,
  findUserById,
  findUserProfile,
  deleteUser,
  updatePoll,
  getAllUsers,
  findPollById
} = require("../controllers/user.js");
const {
  create,
  findAll,
  findById,
  update,
  remove
} = require("../controllers/pollsController.js");

const router = express.Router();

router.route("/api/users").post(registerUser);

router
  .route("/api/users/:id")
  .get(requireSignin, findUserProfile)
  .delete(requireSignin, hasAuthorization, deleteUser);

router.route("/api/users").get(getAllUsers);

router.route("/api/polls/:pollid").get(findPollById).put(updatePoll);

router.param("userId", findUserById);

router.route("/api/polls").post(create);

// router
//   .route("/api/users/:id")
//   .get(requireSignin, findUserProfile)
//   .delete(requireSignin, hasAuthorization, remove);

router.route("/api/polls").get(findAll).post(create);

router.route("/api/polls/:pollId").get(findById).put(update).delete(remove);

router.param("pollId", findById);

module.exports = router;
