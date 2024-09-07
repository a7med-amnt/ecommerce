import eah from "#eah";
import error from "#utils/error.js";

export default function (schema) {
    return eah(function (rq, rs, nx) {
        let body = rq.body;
        let { error: validationError, value } = schema.validate();
        if (validationError)
            return nx(error(validationError.details[0].message));

        rq.validData = body;
        nx();
    });
}

console.log("val");
