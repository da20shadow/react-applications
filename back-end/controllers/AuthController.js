import express from "express";
import {authService} from "../services/authService.js";
import {MESSAGES} from "../constants/index.js";
import {ERRORS} from "../constants/index.js";

const router = express.Router();

router.post('/login', async (req, res) => {

    const {email, password} = req.body;
    console.log('email',email)
    console.log('password',password)
    try {
        const token = await authService.login(email, password);
        res.cookie('token', token, {httpOnly: true});
        return res.status(200)
            .json({message: MESSAGES.LOGIN_SUCCESS})
    } catch (err) {
        return res.status(400).json({message: err.message});
    }

});

router.post('/register', async (req, res) => {
    const {name,email, password, rePassword} = req.body;
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(rePassword)
    try {
        await authService.register(name,email, password, rePassword);
        return res.status(201).json({message: MESSAGES.REGISTRATION_SUCCESS});
    } catch (err) {
        return res.status(400).json({message: ERRORS.getThrowErrorMessage(err)})
    }
});

export default router;