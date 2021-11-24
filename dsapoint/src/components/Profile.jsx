import React from 'react';
import { useEffect } from 'react';
import jwt from'jsonwebtoken';
import { useHistory } from 'react-router';

const Profile = () => {

    const history = useHistory();

    async function populateProfile(){
        const res = await fetch('http://localhost:8000/api/profile',{
            headers:{
                'x-access-token' : localStorage.getItem('token'),
            },
        })

        const data=res.json();
        console.log(data);
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
    },[])
    
    return(
        <>

        </>
    )
}

export default Profile