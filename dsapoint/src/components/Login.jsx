import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../components/sass/login.scss'

const Login = () => {

    const [loginData,setLoginData] = useState({
        emailId:"",
        password:""
    });

    const inputEvent = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        console.log(name+" "+value);
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    return (
        <>
            <div id="container">
                <div id="loginContainer">
                    <div id="left">
                        <div id='loginText'>Login</div>
                        random shit go brrr
                    </div>
                    <div id="right">
                        <form action="" id="loginForm" autoComplete='off'>
                            <label htmlFor="emailId"><span className='smallTextLoginForm'>Email</span></label>
                            <input type="email" name="emailId" id="emailId" value={loginData.emailId} onChange={inputEvent} />
                            <label htmlFor="password"><span className='smallTextLoginForm'>Password</span></label>
                            <input type="password" name="password" id="password" value={loginData.password} onChange={inputEvent} />
                            <button type="submit" id='loginFormBtn'>Submit</button>
                        </form>
                        <div id="innerLoginFormDiv">
                            <NavLink exact to="" className="loginFormLink">Sign Up</NavLink>
                            <NavLink exact to="" className="loginFormLink">Forgot Password?</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
)}

export default Login
