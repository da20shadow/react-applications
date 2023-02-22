import express from "express";
import {isAuthenticated} from "../middlewares/index.js";
import {ERRORS, MESSAGES} from "../constants/index.js";
import {userService} from "../services/index.js";

const router = express.Router();

router.get('/profile', isAuthenticated, (req, res) => {
    try {
        return res.status(200).json({user: req.user});
    } catch (err) {
        return res.status(401).json({message: ERRORS.UNAUTHORIZED})
    }
});

router.patch('/profile/:userId/edit', isAuthenticated, (req, res) => {
    try {
        const userId = req.params.userId;
        const userInfo = req.body;
        const updatedUser = userService.updateProfile(userId, userInfo);
        return res.status(200).json({
            message: MESSAGES.USER_UPDATED,
            user: updatedUser
        });
    } catch (err) {
        return res.status(400).json({
            message: ERRORS.getThrowErrorMessage(err)
        });
    }
});

export default router;