import { useRef } from "react";
import "./login.css";
import {loginCall} from '../../apiCalls';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)


  const handleClick = (e) =>{
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value}, dispatch)
  };

  console.log(user)

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
                    <button className="loginButton" type="submit" disabled={isFetching}>
                      {isFetching ? <CircularProgress color="inherit" size={"20px"}/>: "Log in"}
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                      {isFetching ? <CircularProgress color="inherit" size={"20px"}/>: "Create a New Account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
