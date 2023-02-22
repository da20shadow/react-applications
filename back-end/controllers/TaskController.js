import express from "express";
import {MESSAGES} from "../constants/index.js";
import {isAuthenticated} from "../middlewares/index.js";
const router = express.Router();

router.post('/add', isAuthenticated,async (req, res) => {
    const task = req.body;
    return res.status(201).json({
        message: MESSAGES.ADD_TASK_SUCCESS,
        task,
    });
});

router.get('', isAuthenticated,async (req, res) => {
    const tasks = [
        {_id: 'dfgkldf1kjgjdfgh',title: 'Task Title..',status: 'To Do'},
        {_id: 'dfgkld2fkjgjdfgh',title: 'Task Title 2..',status: 'To Do'},
        {_id: 'dfgkldfk3jgjdfgh',title: 'Task Title 3..',status: 'To Do'},
    ]
    return res.status(200).json({
        tasks,
    });
});


export default router;