import {Link} from "react-router-dom";
import {Main} from "../../components";
import {authService} from "../../services/authService";

function Login() {

    const loginHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const {email, password} = Object.fromEntries(formData);

        authService.login(email, password).then(user => {
            console.log(user);

        }).catch(err => {
            console.log(err.message);
            alert(err.message)
        });
    }

    return (
        <Main title='Login' >

            <form onSubmit={loginHandler}>

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

                <button type={'submit'} >Login</button>

                <span>Not a member? </span>
                <Link to={'/register'}>Register</Link>
            </form>

        </Main>
    )
}

export default Login;