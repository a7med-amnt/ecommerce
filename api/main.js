import express from "express";
import dotenv from "dotenv";
import { PORT } from "#consts/server.js";
import { router } from "#routers/router.js";
import v from "#middlewares/dataValidator.js";
//---initialize the server
dotenv.config();
const server = express();

//---bring the main routers
server.use("/api/v1", router);

//---start the server
server.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
});
