import { useRef } from "react";
import "./login.css"

export default function Login() {
  const email = useRef();
  const password = useRef();
  
  const handleClick = (e) =>{
    e.preventDefault();
    console.log(email.current.value)
  }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Spython-Social</h3>
                <span className="loginDesc">A different vibe and connection on Spython-Social.</span>
            </div>
            <div className="loginright">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                    <input  placeholder="password" type="password" required minLength={6} className="loginInput" ref={password}/>
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
