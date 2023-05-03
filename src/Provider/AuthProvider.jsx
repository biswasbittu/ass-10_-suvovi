import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext=createContext(null);
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    
    const registerUser =(name,photo,email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
         return signInWithEmailAndPassword(auth, email, password)  
    }
     
    const authInfo={
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