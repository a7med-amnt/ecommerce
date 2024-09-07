import express from "express";
import welcome from "./welcome.js";
import routeNotFound from "./routeNotFound.js";
import globalApiErrorHandler from "./globalApiErrorHandler.js";

const router = express.Router();

router.use(welcome);
router.use(routeNotFound);
router.use(globalApiErrorHandler);

export { router };
