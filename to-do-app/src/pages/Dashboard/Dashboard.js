import {Main} from "../../components";
import {useStateContext} from "../../context/ContextProvider";
import {useEffect} from "react";

function Dashboard(){

    const {user,logoutUser} = useStateContext();

    useEffect(() => {
        const isUser = localStorage.getItem('user');
        if (!isUser) {
            logoutUser()
        }
    },[])
    return (
        <Main title='Dashboard'>
            <h2>Hello, {user.name}!</h2>
        </Main>
    )
}

export default Dashboard;