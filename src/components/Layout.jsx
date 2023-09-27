import { Outlet, Link } from "react-router-dom";

const Layout = ({ isLoggedIn }) => {

    return (
        <>
            <ul className="nav-bar">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/login">{isLoggedIn ? 'LOGOUT' : 'LOG IN'}</Link>
                    <Link className="nav-link" to="/">About</Link>
                </li>
            </ul>
        <Outlet />
        </>
    )
}

export default Layout;
