import error from "#utils/error.js";
import eah from "#eah";

export default  eah(function(rq, rs, nx) {
    nx(error(`router not found ${rq.originalUrl}`, 404));
})
