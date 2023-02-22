import {Main} from "../../components";

function AddTask(){

    const addTaskHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const {title, status, description, dueDate} = Object.fromEntries(formData);

    }

    return (
        <Main title={'Add Task'}>

            <form onSubmit={addTaskHandler}>

                <label htmlFor="title">Title:</label>
                <input name={'title'} type="text" placeholder={'Task Title...'} required/>

                <label htmlFor="description">Description:</label>
                <textarea name="description"
                          id="description" cols="30" rows="10"
                          placeholder={'Task description...'}/>

                <div className="flex gap-3">
                    <div>
                        <label htmlFor="status">Status:</label>
                        <select name="status" id="status" required>
                            <option value="toDo">To Do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="inRevision">In Revision</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dueDate">Due Date:</label>
                        <input name={'dueDate'} id={'dueDate'} type="date" />
                    </div>
                </div>

                <button type={'submit'}>Add Task</button>

            </form>

        </Main>
    )
}

export default AddTask;