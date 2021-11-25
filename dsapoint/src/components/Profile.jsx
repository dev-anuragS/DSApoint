import React from 'react';
import { useEffect, useState } from 'react';
import jwt from'jsonwebtoken';
import { useHistory } from 'react-router';
import './sass/profile.scss'

const Profile = () => {

    const [userData,setUserData] = useState ({
        cpassword: "",
        emailId: "",
        fullName: "",
        password: "",
        __v: '',
        _id: ""
    });

    const history = useHistory();

    async function populateProfile(){
        const response = await fetch('http://localhost:8000/api/profile',{
            headers:{
                'x-access-token' : localStorage.getItem('token'),
            },
        })

        const data = await response.json();
        setUserData(data.user);
    }
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            const user = jwt.decode(token);
            if(!user){
                localStorage.removeItem('token');
                history.replace('/login');
            }else{
                populateProfile();
            }
        }
        else{
            alert('Please login to access profile');
            history.replace('/login');
        }
    },[])

    function signOut(){
        localStorage.removeItem('token');
        alert('Logout Succesfull');
        history.replace('/');
    }
    
    return(
        <>
            <div id="profilePage">

                <div id="profileDashboard">
                    <span>Name : {userData.fullName}</span>
                    <span>Email-Id : {userData.emailId}</span>
                    <button id="profileSignOut" onClick={signOut}>Sign Out</button>
                </div>

                <div id="profileProgress">
                    {/* code for progress here */}
                    <h2>Progress</h2>
                </div>
                
            </div>
        </>
    )
}

export default Profile