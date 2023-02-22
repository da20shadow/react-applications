import {ERRORS} from "../constants/index.js";
import {isEmailValid, verifyPassword} from "../utils/validators.js";
import {jwt} from "../lib/promisifyJWT.js";
import {SECRET_KEY} from "../constants/index.js";
import {User} from "../models/index.js";

const login = async (email, password) => {
    if (!email || !password) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    if (!isEmailValid(email)) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    const user = await User.findOne({email});
    if (!user) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    }
    const token = await jwt.sign(payload, SECRET_KEY, {expiresIn: '30'});
    return {token, user: {_id: user._id,name: user.name}}
}

const register = async (name,email, password, rePassword) => {
    if (!name || !email || !password || !rePassword) {
        throw new Error(ERRORS.ALL_FIELDS_REQUIRED);
    }
    if (!isEmailValid(email)) {
        throw new Error(ERRORS.EMAIL_REQUIRED);
    }
    if (password !== rePassword) {
        throw new Error(ERRORS.PASS_MISMATCH);
    }

    const user = await User.findOne({email});
    if (user) {
        throw new Error(ERRORS.EMAIL_EXIST);
    }
    return User.create({name, email, password});
}

export const authService = {
    login,
    register,
}