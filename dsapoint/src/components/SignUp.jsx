import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/sass/signUp.scss'

const SignUp = () => {

    return (
        <>
            <div id="container">
                <div id="loginContainer">
                    <div id="left">
                        <div id='loginText'>Sign Up</div>
                        random shit go brrr
                    </div>
                    <div id="right">
                        <div id="innerLoginFormDiv">
                            <NavLink exact to="/login" className="loginFormLink">Already have an Account !</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
)}

export default SignUp