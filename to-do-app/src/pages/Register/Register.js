import {Main} from "../../components";
import {Link} from "react-router-dom";

function Register() {

    return (
        <Main title='Register'>
            <form>

                <label htmlFor="name">Name</label>
                <input name={'name'}
                       type="text"
                       placeholder={'John'} />

                <label htmlFor="email">Email</label>
                <input name={'email'}
                       type="email"
                       placeholder={'johndoe@gmail.com'} />

                <label htmlFor="password">Password</label>
                <input name={'password'}
                       type="password"
                       placeholder={'********'} />

                <label htmlFor="password">Confirm Password</label>
                <input name={'rePassword'}
                       type="password"
                       placeholder={'********'} />

                <button type={'submit'} >Register</button>

                <span>Not a member? </span>
                <Link to={'/login'}>Login</Link>

            </form>
        </Main>
    )
}

export default Register;