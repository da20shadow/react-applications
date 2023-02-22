import {post} from "./requester";
import {ERRORS} from "../constants";
import {isEmailValid, isPasswordValid} from "../utils/validators";

const PATH = 'auth';

const login = async (email,password) => {
    if (!email || !password) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    if (!isEmailValid(email)) {
        throw new Error(ERRORS.BAD_CREDENTIALS);
    }
    if (!isPasswordValid(password)) {
        throw new Error(ERRORS.BAD_CREDENTIALS)
    }
    email = email.trim();
    password = password.trim();
    return post(`${PATH}/login`,{email,password})
}

const register = async (name, email, password, rePassword) => {
    if (!name || !email || !password || !rePassword) {
        throw new Error(ERRORS.ALL_FIELDS_REQUIRED);
    }
    if (!isEmailValid(email)) {
        throw new Error(ERRORS.INVALID_EMAIL);
    }
    if (!isPasswordValid(password)) {
        throw new Error(ERRORS.INVALID_PASS)
    }
    if (password !== rePassword) {
        throw new Error(ERRORS.PASS_MISMATCH);
    }
    name = name.trim();
    email = email.trim();
    password = password.trim();
    rePassword = rePassword.trim();
    return post(`${PATH}/register`, {name, email, password, rePassword});
}

const logout = () => {
    return post(`${PATH}/logout`,'');
}

const checkIfIsLogged = () => {
    return post(`${PATH}/is-logged`);
}

export const authService = {
    login,
    register,
    logout,
    checkIfIsLogged
}