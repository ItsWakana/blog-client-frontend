import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
        <div className="epic-header">
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>About</li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Layout;
