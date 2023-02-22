import {Main} from "../../components";

function Tasks(){

    return (
        <Main title='Tasks'>

            <ul className={'box w-95'}>
                <li className={'box w-95'}>
                    <h2>Task Title</h2>
                    <div className="flex gap-3 ">
                        <div>Status: To Do</div>
                        <div>Due Date: 23/04/2023 </div>
                    </div>
                    <p>Task Description...</p>
                </li>

                <li className={'box w-95'}>
                    <h2>Task Title 2</h2>
                    <div className="flex gap-3 ">
                        <div>Status: In Progress</div>
                        <div>Due Date: 25/04/2023 </div>
                    </div>
                    <p>Task Description 2...</p>
                </li>
            </ul>

        </Main>
    )
}

export default Tasks;