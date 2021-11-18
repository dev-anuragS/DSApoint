import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/sass/login&signUp.scss'
import { useState } from 'react'

const SignUp = () => {

    const [signUpData,setsignUpData] = useState({
        name:"",
        emailId:"",
        password:""
    });

    const inputEvent = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setsignUpData({
            ...signUpData,
            [name]: value
        })
    }

    return (
        <>
            <div id="container">
                <div id="loginContainer">
                    <div id="left">
                        <div id='loginText'>Sign Up</div>
                        random shit go brrr
                    </div>
                    <div id="right">
                        <form action="" id="loginForm" autoComplete='off'>
                            <label htmlFor="name"><span className='smallTextLoginForm'>Name</span></label>
                            <input type="text" name="name" id="name" value={signUpData.name} onChange={inputEvent} />
                            <label htmlFor="emailId"><span className='smallTextLoginForm'>Email</span></label>
                            <input type="email" name="emailId" id="emailId" value={signUpData.emailId} onChange={inputEvent} />
                            <label htmlFor="password"><span className='smallTextLoginForm'>Password</span></label>
                            <input type="password" name="password" id="password" value={signUpData.password} onChange={inputEvent} />
                            <button type="submit" id='loginFormBtn'>Submit</button>
                        </form>
                        <div id="innerLoginFormDiv">
                            <NavLink exact to="/login" className="loginFormLink">Already have an Account !</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
)}

export default SignUp