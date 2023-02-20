import './Header.css';

function Header () {

    return (
        <header className={'py-3'}>
            <nav className={'flex gap-4 justify-center'}>
                <a className={'nav-link'} href="/">Home</a>
                <a className={'nav-link'} href="/login">Login</a>
                <a className={'nav-link'} href="/register">Register</a>
            </nav>
        </header>
    );
}

export default Header;