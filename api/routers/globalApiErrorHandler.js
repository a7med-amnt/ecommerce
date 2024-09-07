import express from "express";
import globalApiErrorHandler from "#ctrl/globalApiErrorHandler.js"
const router = express.Router();

router.use(globalApiErrorHandler)

export default router