import express from "express";
import routeNotFound from "#ctrl/routeNotFound.js";
import errorHandler from "#utils/error.js";

const router = express.Router();

router.use("*", routeNotFound);

export default router;
