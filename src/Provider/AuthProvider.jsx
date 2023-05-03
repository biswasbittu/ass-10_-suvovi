import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext=createContext(null);
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);


    const registerUser =(name,photo,email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
         return signInWithEmailAndPassword(auth, email, password)  
    }
     
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,loggedUser=>{
            console.log('logged in user auth state observer',loggedUser);
            setUser(loggedUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        registerUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;