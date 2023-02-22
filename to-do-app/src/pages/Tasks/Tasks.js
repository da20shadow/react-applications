import {Main} from "../../components";
import {useEffect, useState} from "react";
import {taskService} from "../../services/taskService";

function Tasks() {
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        console.log('Getting All Tasks!')
       taskService.getAll().then(res => {
           console.log(res.tasks)
           setTasks(res.tasks)
       }).catch(err => {
           console.log(err)
       })
    }, [])

    return (
        <Main title='Tasks'>

            <ul className={'box w-95'}>
                {tasks
                    ? tasks.map(t => {
                        return (<li className={'box w-95'} key={t._id}>
                            <h2>T{t.title}</h2>
                            <div className="flex gap-3 ">
                                <div>Status: {t.status}</div>
                                <div>Due Date: 23/04/2023</div>
                            </div>
                            <p>Task Description...</p>
                        </li>)
                    })
                    : ''}
            </ul>

        </Main>
    )
}

export default Tasks;