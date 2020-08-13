import express from "express";
import {
  registerUser,
  findUserById,
  findUserProfile,
  deleteUser,
  updatePoll,
  getAllUsers,
  findPollById,
} from "../controllers/user.js";

// import them to protect routes
import { requireSignin, hasAuthorization } from "../controllers/auth.js";

const router = express.Router();

router.route("/api/users").post(registerUser);

router
  .route("/api/users/:id")
  .get(requireSignin, findUserProfile)
  .delete(requireSignin, hasAuthorization, deleteUser);

router.route("/api/users").get(getAllUsers);

router.route("/api/:pollid").get(findPollById).put(updatePoll);

router.param("userId", findUserById);

export default router;
