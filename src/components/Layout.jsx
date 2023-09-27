import { Outlet, Link } from "react-router-dom";

const Layout = ({ isLoggedIn, handleLogOut }) => {

    return (
        <>
            <ul className="nav-bar">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <Link className="nav-link" to="/login"
                        onClick={handleLogOut}>
                            LOG OUT
                        </Link>
                    ) : (
                        <Link className="nav-link" to="/login">
                            LOG IN
                        </Link>
                    )}
                    <Link className="nav-link" to="/">About</Link>
                </li>
            </ul>
        <Outlet />
        </>
    )
}

export default Layout;
