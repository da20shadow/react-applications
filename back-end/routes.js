import express from "express";
import {authController, userController,taskController} from "./controllers/index.js";
import {ERRORS} from "./constants/index.js";

const routes = express.Router();

routes.use('/api/auth', authController);

routes.use('/api/tasks',taskController)

routes.use('/api/users', userController);

routes.all('*', (req,res) => {
    res.status(404).json({message: ERRORS.PAGE_NOT_FOUND})
})

export default routes;