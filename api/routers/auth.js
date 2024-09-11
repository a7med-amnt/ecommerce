import express from "express";
import auth from "#ctrls/auth.js";
import {
    userSignupValidationSchema,
    userSigninValidationSchema
} from "#schemas/user.js";

import dataValidator from "#middlewares/dataValidator.js";

const router = express.Router();

router
    .route("/signup")
    .post(dataValidator(userSignupValidationSchema), auth.signup);
    
router
    .route("/signin")
    .post(dataValidator(userSigninValidationSchema), auth.signin);

export default router;
