import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <ul className="nav-bar">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/">About</Link>
                    {/* <button><a href="">About</a></button> */}

                </li>
            </ul>
        <Outlet />
        </>
    )
}

export default Layout;
