export default function (message, statusCode) {
    let error = new Error();
    error.message = message || "error with no message";
    error.statusCode = statusCode || 400;
    return error
}
