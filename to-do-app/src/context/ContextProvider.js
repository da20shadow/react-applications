import {createContext,useContext} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const StateContext = createContext();

const initialUserState = {
    _id: '',
    name: '',
}

export const ContextProvider = ({children}) => {
    const [user, setUser] = useLocalStorage('user', initialUserState);
    const loginUser = (userData) =>{
        setUser(userData);
    }
    const logoutUser = () =>{
        setUser(initialUserState);
    }

    return (
        <StateContext.Provider value={{
            isLogged: user._id,
            user,
            setUser,
            loginUser,
            logoutUser,
        }} >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);