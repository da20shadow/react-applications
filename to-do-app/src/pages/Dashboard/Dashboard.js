import {Main} from "../../components";
import {useStateContext} from "../../context/ContextProvider";

function Dashboard(){

    const {user} = useStateContext();

    return (
        <Main title='Dashboard'>
            <h2>Hello, {user.name}!</h2>
        </Main>
    )
}

export default Dashboard;