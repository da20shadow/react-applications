import logo from './logo.svg';
import './assets/scss/style.css';
import {Header} from "./components";
import {Routes, Route} from "react-router-dom";
import {Home, Login, Register} from "./pages";

function App() {
  return (
    <>
      <Header/>

        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/register'} element={<Register/>} />
        </Routes>
    </>
  );
}

export default App;
