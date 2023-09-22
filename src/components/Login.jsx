
const Login = () => {
    return (
        <>
        <h1>Sign in</h1>
        <div className="form-wrapper">
            <form className="sign-up-form" action="/sign-in" method="POST">
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"></input>
                </div>
                <button type="submit">Sign In</button>
                <p>Dont have an account? <a className="sign-up" href="/sign-up">Sign up</a></p>
            </form>
        </div>
        </>
    )
}

export default Login;