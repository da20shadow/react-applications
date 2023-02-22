import './Header.css';
import {NavLink,useNavigate} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider";
import {authService} from "../../services/authService";

function Header () {
    const {isLogged,logoutUser} = useStateContext();

    const redirect = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        authService.logout().then(r => {
            logoutUser();
            setTimeout(()=>{
                redirect('/login');
            },200)
        }).catch(err => {
            alert(err.message);
        });
    }

    const loggedUserNav = (
        <>
            <NavLink to={'/dashboard'} className={'nav-link'} >Dashboard</NavLink>
            <NavLink onClick={logout} to="#" className={'nav-link'}>Logout</NavLink>
        </>
    );
    const guestNav = (
        <>
            <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
            <NavLink to={'/register'} className={'nav-link'}>Register</NavLink>
        </>
    )

    return (
        <header className={'py-3'}>
            <nav className={'flex gap-4 justify-center'}>
                <NavLink to={'/'} className={'nav-link'} >Home</NavLink>
                {isLogged ? loggedUserNav : guestNav}
            </nav>
        </header>
    );
}

export default Header;