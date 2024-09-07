import express from "express";
import welcome from "#ctrl/welcome.js";

const router = express.Router();

router.route("/").get(welcome);

export default router;
