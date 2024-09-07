import mgs from "#mgs";
import joi from "joi";
let userSchema = new mgs.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 2,
            maxLength: 20
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        }
    },
    { timestamps: true }
);

export const userSignupValidationSchema = joi.object({
    name: joi.string().required().trim().min(2).max(20),
    password: joi.string().required().trim().min(5).max(30),
    email: joi.string().required().trim().email()
});

export const userSigninValidationSchema = joi.object({
    password: joi.string().required().trim().min(5).max(30),
    email: joi.string().required().trim().email()
});