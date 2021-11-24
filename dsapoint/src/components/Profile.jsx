import React from 'react';
import { useEffect, useState } from 'react';
import jwt from'jsonwebtoken';
import { useHistory } from 'react-router';

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
            alert('Session Timeout, Please login again');
            history.replace('/login');
        }
    },[])
    
    return(
        <>
            <div id="profilePage">
                name: {userData.fullName}
                emailId: {userData.emailId}
            </div>
        </>
    )
}

export default Profile