import express from "express";
import globalApiErrorHandler  from "#middlewares/globalApiErrorHandler.js";
import routeNotFound from "./routeNotFound.js";
import welcome from "./welcome.js";
import auth from "./auth.js";

const router = express.Router();

router.use(welcome);
router.use("/auth", auth);
router.use(routeNotFound);

router.use(globalApiErrorHandler);

export { router };
