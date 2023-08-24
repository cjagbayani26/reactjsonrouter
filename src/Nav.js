import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link to="/">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        </Link>
        <Link to="/ComponentOne">
        <a className="nav-link" href="#">Component One</a>
        </Link>
        <Link to="/ComponentTwo">
        <a className="nav-link" href="#">Component Two</a>
        </Link>
        <Link to="/ComponentThree">
        <a className="nav-link" href="#">Component Three</a>
        </Link>
        </div>
        </div>
        </div>
            </nav>
    );
}

export default Nav;