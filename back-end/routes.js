import express from "express";
import {authController} from "./controllers/index.js";

const routes = express.Router();

routes.use('/api/auth', authController);

export default routes;