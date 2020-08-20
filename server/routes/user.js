const { requireSignin, hasAuthorization } = require("../controllers/auth.js");
const express = require("express");
const {
  registerUser,
  findUserById,
  findUserProfile,
  deleteUser,
  updatePoll,
  getAllUsers,
  findPollById,
} = require("../controllers/user.js");

const router = express.Router();

router.route("/api/users").post(registerUser);

router
  .route("/api/users/:id")
  .get(requireSignin, findUserProfile)
  .delete(requireSignin, hasAuthorization, deleteUser);

router.route("/api/users").get(getAllUsers);

module.exports = router;
