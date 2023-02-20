import {Link} from "react-router-dom";
import {Main} from "../../components";

function Login() {

    return (
        <Main title='Login' >

            <form>

                <label htmlFor="email">Email</label>
                <input name={'email'}
                       type="email"
                       placeholder={'johndoe@gmail.com'} />

                <label htmlFor="password">Password</label>
                <input name={'password'}
                       type="password"
                       placeholder={'********'} />

                <button type={'submit'} >Login</button>

                <span>Not a member? </span>
                <Link to={'/register'}>Register</Link>
            </form>

        </Main>
    )
}

export default Login;