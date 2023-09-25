import { useState } from "react";

const Login = ({ handleLoginClick }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoginClick(username, password);
    }
    return (
        <>
        <h1>Sign in</h1>
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="sign-up-form" action="/sign-in" method="POST">
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