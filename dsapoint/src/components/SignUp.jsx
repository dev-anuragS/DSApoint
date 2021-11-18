import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/sass/login&signUp.scss'
import { useState } from 'react'

const SignUp = () => {

    const [signUpData,setsignUpData] = useState({
        fullName:"",
        emailId:"",
        password:"",
        cpassword:""
    });

    const inputEvent = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        setsignUpData({
            ...signUpData,
            [name]: value
        })
    }

    async function registerUser(event){
        event.preventDefault();
        const response = await fetch('http://localhost:8000/api/register',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                ...signUpData,
            }),
        })
        const data = await response.json();
        console.log(data);
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
                        <form action="" id="loginForm" autoComplete='off' onSubmit={registerUser}>
                            <label htmlFor="fullName"><span className='smallTextLoginForm'>Name</span></label>
                            <input type="text" name="fullName" id="fullName" value={signUpData.fullName} onChange={inputEvent} />
                            <label htmlFor="emailId"><span className='smallTextLoginForm'>Email</span></label>
                            <input type="email" name="emailId" id="emailId" value={signUpData.emailId} onChange={inputEvent} />
                            <label htmlFor="password"><span className='smallTextLoginForm'>Password</span></label>
                            <input type="password" name="password" id="password" value={signUpData.password} onChange={inputEvent} />
                            <label htmlFor="cpassword"><span className='smallTextLoginForm'>Confirm Password</span></label>
                            <input type="password" name="cpassword" id="cpassword" value={signUpData.cpassword} onChange={inputEvent} />
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