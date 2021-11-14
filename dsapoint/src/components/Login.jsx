import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/sass/login.scss'

const Login = () => {
    return (
        <>
            <div id="container">
                <div id="loginContainer">
                    <div id="left">
                        <div id='loginText'>Login</div>
                        random shit go brrr
                    </div>
                    <div id="right">
                        <form action="" id="loginForm">
                            <label htmlFor="emailId"><span class='smallTextLoginForm'>Email</span></label>
                            <input type="email" name="emailId" id="emailId" value='' />
                            <label htmlFor="password"><span class='smallTextLoginForm'>Password</span></label>
                            <input type="password" name="password" id="password" value='' />
                            <button type="submit" id='loginFormBtn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
)}

export default Login
