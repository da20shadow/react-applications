import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";
import {isEmailValid} from "../utils/validators.js";

const userSchema = new Schema({
    name: {
        type: String,
        minLength: [2, `Name must be at least 2 characters long!`],
        required: [true,'Name is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true, 'Email already registered!'],
        minLength: [10, 'Email must be at least 10 characters long!'],
        validate: {
            validator: isEmailValid,
            message: (props) => `Please, enter valid email! ${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        minLength: [8,`Password must be at least 8 characters long!`],
        required: [true,'Password is required!'],
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 9)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = model('User', userSchema);
export default User;