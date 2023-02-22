import express from "express";
import {authController, userController} from "./controllers/index.js";
import {ERRORS} from "./constants/index.js";
import {authToken} from "./middlewares/index.js";

const routes = express.Router();

routes.use('/api/auth', authController);

//Check if there is a token
express().use(authToken);

routes.use('/api/users', userController);

routes.all('*', (req,res) => {
    res.status(404).json({message: ERRORS.PAGE_NOT_FOUND})
})

export default routes;