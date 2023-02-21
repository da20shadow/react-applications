import express from "express";
import {isAuthenticated} from "../middlewares/index.js";

const router = express.Router();

router.get('/profile', isAuthenticated, (req, res) => {
    try {

    } catch (err) {

    }
})