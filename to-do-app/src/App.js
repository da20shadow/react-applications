import logo from './logo.svg';
import './assets/scss/style.css';
import {Header} from "./components";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages";

function App() {
  return (
    <>
      <Header/>

        <Routes>
            <Route path={'/'} element={<Home/>} />
        </Routes>
    </>
  );
}

export default App;
