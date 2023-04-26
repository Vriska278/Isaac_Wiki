import { NavLink, Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
            <div className="container">
                <span className="navbar-brand"><strong>IsaacPedia</strong></span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/bosses">
                                Boss List
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tips & Tricks
                            </a>
                            <ul className="dropdown-menu bg-danger">
                                <li>
                                    <Link className="dropdown-item" to="/deals">
                                        Angel/Devil Deals
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/secretrooms">
                                        Secret Rooms
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/rocks">
                                        Tinted Rocks
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;