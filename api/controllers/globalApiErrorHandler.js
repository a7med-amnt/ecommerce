import { ENV } from "#consts/server.js";
import eah from "#eah";

export default eah(function (er, rq, rs, nx) {
    let message = er.mssage || "error with on message";
    let statusCode = er.statusCode || 500;
    let stack = ENV == "development" ? error.stack : null;
    rs.json({
        message,
        statusCode,
        stack
    });
})
