import React, { createContext, useState } from 'react'
import {getAuth} from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    const auth = getAuth();

    useEffect(() =>{
       const unsubscribed =   auth.onIdTokenChanged((user) =>{
        if(user?.uid){
            setUser(user)
            localStorage.setItem("accessToken",user.accessToken);
            return;
        }

        setUser({});
        localStorage.clear();
        navigate("/login");
    })

    return () =>{
        unsubscribed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[auth])

    return (
    <AuthContext.Provider value ={{user , setUser}}>
        {children}
    </AuthContext.Provider>
  )
}
