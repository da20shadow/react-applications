import {ERRORS} from "../constants";
import {post,get} from "./requester";

const PATH = 'tasks';
const addTask = (task,errorCallBack) => {
    if (!task.title) {
        throw new Error(ERRORS.INVALID_TASK_TITLE)
    }
    if (!task.status) {
        task.status = 'toDo';
    }
    if (task.dueDate) {
        const today = new Date();
        const date = new Date(task.dueDate);
        if (today > date) {
            if (today.getDate() > date.getDate()) {
                throw new Error(ERRORS.INVALID_DUE_DATE);
            }
        }
        task.dueDate = task.dueDate.trim();
    }
    task.description = task.description ? task.description.trim() : undefined;
    return post(`${PATH}/add`, task,errorCallBack);
}

const getAll = () => {
    return get(PATH);
}

export const taskService = {
    addTask,
    getAll,
}