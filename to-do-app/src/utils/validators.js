import {RGX} from "../constants";

export const isEmailValid = (email) => {
    return RGX.emailPattern.test(email);
}

export const isPasswordValid = (password) => {
    return !(password.length < 8 || password.length > 45);
}