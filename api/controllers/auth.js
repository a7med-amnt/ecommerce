import eah from "#eah";

const signup = eah(async function (rq, rs, nx) {
    rs.json("signup");
});

const signin = eah(async function (rq, rs, nx) {
    //rs.json("signin")
    nx("bbbbb");
});

export default {
    signup,
    signin
};
