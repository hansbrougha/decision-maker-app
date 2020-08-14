import express from "express";
import {
  create,
  findAll,
  findAllById,
  update,
  remove,
} from "../controllers/pollsController.js";

const router = express.Router();

router.route("/api/polls").post(create);

// router
//   .route("/api/users/:id")
//   .get(requireSignin, findUserProfile)
//   .delete(requireSignin, hasAuthorization, remove);

router.route("/api/polls").get(findAll).post(create);

router.route("/api/polls/:pollId").get(findAllById).put(update).delete(remove);

router.param("pollId", findAllById);

export default router;

// const router = require("express").Router();
// const pollsController = require("../../controllers/pollsController");

// // Matches with "/api/polls"
// router.route("/").get(pollsController.findAll).post(pollsController.create);

// // Matches with "/api/polls/:id"
// router
//   .route("/:id")
//   .get(pollsController.findById)
//   .put(pollsController.update)
//   .delete(pollsController.remove);

// module.exports = router;
