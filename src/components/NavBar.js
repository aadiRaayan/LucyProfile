import './NavBar.css'

const NavBar = function ({login}) {

    return (
        <div className="navbar">
            <div className="logo">LucyProfile</div>
            <div className='nav-links'>
                <div className="nav">About</div>
                <div className="nav">Pricing</div>
                <button className="login" onClick={login}>Login</button>
            </div>

        </div>
    );
}

export default NavBar;