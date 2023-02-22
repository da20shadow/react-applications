import express from "express";
import {authService} from "../services/authService.js";
import {MESSAGES} from "../constants/index.js";
import {ERRORS} from "../constants/index.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const {token,user} = await authService.login(email, password);
        res.cookie('token', token, {httpOnly: true});
        return res.status(200)
            .json({user,message: MESSAGES.LOGIN_SUCCESS})
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
});

router.post('/register', async (req, res) => {
    const {name,email, password, rePassword} = req.body;
    try {
        await authService.register(name,email, password, rePassword);
        return res.status(201).json({message: MESSAGES.REGISTRATION_SUCCESS});
    } catch (err) {
        return res.status(400).json({message: ERRORS.getThrowErrorMessage(err)})
    }
});

router.post('/logout', async (req, res) => {
    try {
        req.user = null;
        req.isAuthenticated = false;
        res.clearCookie('token');
        return res.status(200)
            .json({message: MESSAGES.LOGOUT_SUCCESS})
    } catch (err) {
        return res.status(400).json({message: err.message});
    }
});

router.post('/is-logged', async (req,res) => {
    if (req.user) {
        return res.status(200).json({user: req.user});
    }
    return res.status(401).json({message: ERRORS.UNAUTHORIZED,code: 401});
})

export default router;