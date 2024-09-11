import eah from "#eah";
import error from "#utils/error.js";

export default function (schema) {
    return eah(function (rq, rs, nx) {
        let body = rq.body;
        let { error: validationError, value } = schema.validate(body);

        if (validationError)
            return nx(error(validationError.details[0].message));

        if (value) {
            rq.validData = body;
            nx();
        } else nx(error("no value"));
    });
}
