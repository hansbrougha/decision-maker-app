const router = require("express").Router();
const pollRoutes = require("./polls");

// poll routes
router.use("/polls", pollRoutes);

module.exports = router;
