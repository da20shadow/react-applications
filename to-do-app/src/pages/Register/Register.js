import {Main} from "../../components";
import {Link} from "react-router-dom";
import {authService} from "../../services/authService";

function Register() {

    const registerHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {name, email, password, rePassword} = Object.fromEntries(formData);
        authService.register(name, email, password, rePassword).then(r => {
            console.log(r);
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
        });
    }

    return (
        <Main title='Register'>
            <form onSubmit={registerHandler}>

                <label htmlFor="name">Name</label>
                <input name={'name'}
                       type="text"
                       placeholder={'John'}
                       required />

                <label htmlFor="email">Email</label>
                <input name={'email'}
                       type="email"
                       placeholder={'johndoe@gmail.com'}
                       required />

                <label htmlFor="password">Password</label>
                <input name={'password'}
                       type="password"
                       placeholder={'********'}
                       required />

                <label htmlFor="password">Confirm Password</label>
                <input name={'rePassword'}
                       type="password"
                       placeholder={'********'}
                       required />

                <button type={'submit'} >Register</button>

                <span>Not a member? </span>
                <Link to={'/login'}>Login</Link>

            </form>
        </Main>
    )
}

export default Register;