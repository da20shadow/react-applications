import {Link} from "react-router-dom";

function Login() {

    return (
        <form>

            <label htmlFor="email">Email</label>
            <input name={'email'}
                   type="email"
                   placeholder={'johndoe@gmail.com'} />

            <button type={'submit'} >Login</button>

            <span>Not a member? </span>
            <Link to={'/register'}>Register</Link>
        </form>
    )
}

export default Login;