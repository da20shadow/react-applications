import {Task, User} from "../models/index.js";

const add = async (task) => {
    return Task.create(task);
}

const getAll = async (userId) => {
    try {
        const user = await User.findById(userId);
        const tasks = await Task.find({ owner: user }).lean();
        return tasks;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const taskService = {
    add,
    getAll,
}