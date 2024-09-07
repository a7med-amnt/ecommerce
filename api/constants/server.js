import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const ENV = process.env.ENV;
export const BCRYPTJS_SALT = process.env.BCRYPTJS_SALT;
export const JWT_SECRE_KEY = process.env.JWT_SECRE_KEY;

