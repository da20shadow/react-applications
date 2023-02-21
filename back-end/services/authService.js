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
    const isPasswordValid = verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    const payload = {
        _id: user._id,
        email: user.email,
    }
    return await jwt.sign(payload,SECRET_KEY,{expiresIn: '1h'})
}

const register = async (email, password, rePassword) => {
    if (!email || !password || !rePassword) {
        throw new Error(ERRORS.ALL_FIELDS_REQUIRED);
    }
    if (!isEmailValid(email)) {
        throw new Error(ERRORS.EMAIL_REQUIRED);
    }
    if (password !== rePassword) {
        throw new Error(ERRORS.PASS_MISMATCH);
    }

    const user = await User.findOne({email});
    const isPasswordValid = verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    const payload = {
        _id: user._id,
        email: user.email,
    }
    return await jwt.sign(payload,SECRET_KEY,{expiresIn: '1h'})
}

export const authService = {
    login,
    register,
}