import {User} from "../models/index.js";
import {ERRORS} from "../constants/index.js";

const updateProfile = async (userId,userInfo) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error(ERRORS.USER_NOT_EXIST)
    }
    return User.findByIdAndUpdate(userId, userInfo);
}

export const userService = {
    updateProfile,
}