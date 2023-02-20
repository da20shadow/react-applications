import './Header.css';
import {NavLink} from "react-router-dom";

function Header () {

    return (
        <header className={'py-3'}>
            <nav className={'flex gap-4 justify-center'}>
                <NavLink to={'/'} className={'nav-link'} >Home</NavLink>
                <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                <NavLink to={'/register'} className={'nav-link'}>Register</NavLink>
            </nav>
        </header>
    );
}

export default Header;