import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <ul className="nav-bar">
                <li><button>Home</button></li>
                <li>
                    <button><a href="">Login</a></button>
                    <button><a href="">About</a></button>
                </li>
            </ul>
        <Outlet />
        </>
    )
}

export default Layout;
