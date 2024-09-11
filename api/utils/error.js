export default function (message, statusCode) {
    //throw "errrrrrrrr";
    let error = new Error();
    error.message = message || "error with no message";
    error.statusCode = statusCode || 400;
    throw error;
}
