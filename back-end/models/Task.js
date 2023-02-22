import { Schema, model, Types } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        minLength: [2, 'Title must be at least 2 characters long!'],
        required: true,
    },
    description: {
        type: String,
        minLength: [2, 'Description must be at least 2 characters long'],
        maxLength: [455, 'Description must be max 455 characters long'],
    },
    status: {
        enum: ['To Do', 'In Progress', 'In Revision', 'Completed'],
    },
    dueDate: {
        type: String,
    },
    subtasks: [{
        subtask: {
            type: String,
            minLength: [2, 'Subtask title must be at least 2 characters long!'],
            maxLength: [75, 'Subtask title must be max 75 characters long!'],
        }
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Task = model('Task', taskSchema);
export default Task;