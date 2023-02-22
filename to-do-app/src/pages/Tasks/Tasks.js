import {Main} from "../../components";
import {useEffect, useState} from "react";
import {taskService} from "../../services/taskService";
import {Link} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const {logoutUser} = useStateContext();

    useEffect(() => {

        taskService.getAll().then(res => {
            setTasks(res.tasks);
        }).catch(err => {
            console.log(err);
            if (err.code === 401) { logoutUser() }
        })

    },[])

    return (
        <Main title='Tasks'>

            <ul className={'box w-95'}>
                {tasks
                    ? tasks.map(t => {
                        return (<li className={'box w-95'} key={t._id}>
                            <Link to={'/tasks/' + t._id + '/details'}>
                                <h2>{t.title}</h2>
                            </Link>
                            <div className="flex gap-3 ">
                                <div>Status: {t.status}</div>
                                <div>Due Date: 23/04/2023</div>
                            </div>
                            <p>{t.description}</p>
                            <p>Subtasks: ({t.subtasks.length})</p>
                        </li>)
                    })
                    : ''}
            </ul>

        </Main>
    )
}

export default Tasks;