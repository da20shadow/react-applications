import logo from './logo.svg';
import './assets/scss/style.css';
import {Header} from "./components";
import {Navigate,Routes, Route} from "react-router-dom";
import {AddTask, Dashboard, Home, Login, Register, Tasks} from "./pages";
import {useStateContext} from "./context/ContextProvider";
import {useEffect} from "react";
import {authService} from "./services/authService";

function App() {
    const {user,isLogged,loginUser} = useStateContext();
    useEffect(()=>{
        console.log('Check if is Logged!')
        console.log('user', user)
        console.log('isLogged', isLogged)
        if (!isLogged) {
            console.log('There is no info in the Context!')
            console.log('Checking with request to the server...!')
            authService.checkIfIsLogged().then(r => {
                loginUser(r.user)
                console.log(r)
                console.log(r,user)
                console.log('User is logged!')
            }).catch(err => {
                console.log('Error: ', err)
            });
        }
    },[])
  return (
    <>
      <Header/>

        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={isLogged ? <Navigate to="/dashboard" replace={true} /> : <Login/>} />
            <Route path={'/register'} element={isLogged ? <Navigate to="/dashboard" replace={true} /> : <Register/>} />
            <Route path={'/dashboard'} element={isLogged ?  <Dashboard/> : <Navigate to="/login" replace={true} />} />
            <Route path={'/tasks'} element={isLogged ?  <Tasks/> : <Navigate to="/login" replace={true} />} />
            <Route path={'/add-task'} element={isLogged ?  <AddTask/> : <Navigate to="/login" replace={true} />} />
        </Routes>
    </>
  );
}

export default App;
