import { ENV } from "#consts/server.js";
import eah from "#eah";

export default function (er, rq, rs, nx) {
    let message = er.message || "error with on message";
    let statusCode = er.statusCode > 399 ? er.statusCode : 500;
    let stack = ENV == "development" ? er.stack : null;
    rs.status(statusCode).json({
        message,
        statusCode,
        stack
    });
}
