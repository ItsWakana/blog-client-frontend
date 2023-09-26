import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ validateLogin, isLoggedIn }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    },[isLoggedIn, navigate]);
    
    const handleClick = (e) => {
        e.preventDefault();

        if (!username || !password) {
            console.log("Invalid login")
            return;
        }
        validateLogin(username, password);
    }

    return (
        <>
        <h1>Sign in</h1>
        <div className="form-wrapper">
            <form onSubmit={handleClick} className="sign-up-form" action="/sign-in" method="POST">
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" value={password}onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit">Sign In</button>
                <p>Dont have an account? <a className="sign-up" href="/sign-up">Sign up</a></p>
            </form>
        </div>
        </>
    )
}

export default Login;