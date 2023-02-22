import express from "express";
import {ERRORS, MESSAGES} from "../constants/index.js";
import {isAuthenticated} from "../middlewares/index.js";
import {taskService} from "../services/index.js";
const router = express.Router();

router.post('/add', isAuthenticated,async (req, res) => {
    const task = req.body;
    try {
        task.owner = req.user._id;
        const addedTask = await taskService.add(task)
        return res.status(201).json({
            message: MESSAGES.ADD_TASK_SUCCESS,
            task: addedTask,
        });
    }catch (err){
        return res.status(400).json({
            message: ERRORS.ADD_TASK_FAILURE,
            error: err
        });
    }
});

router.get('', isAuthenticated,async (req, res) => {
    try {
        const tasks = await taskService.getAll(req.user._id);
        return res.status(200).json({tasks});
    }catch (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
});


export default router;