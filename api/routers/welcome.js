import express from "express";
import welcome from "#ctrls/welcome.js";

const router = express.Router();

router.route("/").get(welcome);

export default router;
