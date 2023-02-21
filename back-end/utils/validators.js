import bcrypt from "bcrypt";

const emailPattern = /^[a-z]+[a-z0-9_]+[@][a-z]+[.][a-z]{2,11}$/;

export const isEmailValid = (email) => {
    return emailPattern.test(email);
}

export const verifyPassword = (textPassword,hashedPassword) => {
    return bcrypt.compare(textPassword, hashedPassword);
}