import mgs from "#mgs";
import bcryptjs from "bcryptjs";
import { BCRYPTJS_SALT, JWT_SECRE_KEY } from "#consts/server.js";
import jwt from "#jwt";
import { userSchema } from "#schemas/user.js";

userSchema.pre("save", function () {
    this.password = bcryptjs.hashSync(this.password, BCRYPTJS_SALT);
});

userSchema.methods.genToken = function () {
    return jwt.sign({ _id: this._id, type: this.type }, JWT_SECRE_KEY, {
        expiresIn: "7d"
    });
};

userSchema.methods.comPas = function (pas) {
    return bcryptjs.compareSync(pas, this.password);
};

userSchema.static.findByEmail = async function (email) {
  return await this.findOne({email})
}