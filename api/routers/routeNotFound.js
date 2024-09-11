import express from "express";
import routeNotFound from "#ctrls/routeNotFound.js";

const router = express.Router();

router.use("*", routeNotFound);

export default router;
