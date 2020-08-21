const express = require("express");
const {
  create,
  findAll,
  findById,
  update,
  remove,
} = require("../controllers/pollsController.js");

const router = express.Router();

router.route("/api/polls").get(findAll).post(create);

router.route("/api/polls/:pollId").get(findById).put(update).delete(remove);

module.exports = router;
