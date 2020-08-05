import express from "express";
import { signin, signout } from "../controllers/auth.js";

const router = express.Router();

router.route("/auth/signin").post(signin);

router.route("/auth/signout").get(signout);

export default router;
