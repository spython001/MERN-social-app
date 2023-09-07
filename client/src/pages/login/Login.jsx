import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Spython-Social</h3>
                <span className="loginDesc">A different vibe and connection on Spython-Social.</span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input  placeholder="password" className="loginInput" />
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
