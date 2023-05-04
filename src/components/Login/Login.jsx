import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Login = () => {

    const {signInUser} =useContext(AuthContext);
      const [success,setSuccess]=useState('');
      const[error,setError]=useState('')
      const navigate =useNavigate();
      const location =useLocation();

      console.log("login page location",location)
      const from = location.state?.from?.pathname || "/"



    const handleLogin=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email= form.email.value;
        const password=form.password.value
        console.log(email,password)
        signInUser(email,password)
        .then((result)=>{
            const loggedUser=result.user;
            // console.log(loggedUser)
            setSuccess("Login successfull");
            setError("");
            navigate(from,{replace:true})



        })
        .catch((error)=>{
            // console.log(error)
            setError(error.message);
            setSuccess("")
        })
    }
//   Google Log In...........

    const auth= getAuth(app);
    const provider= new GoogleAuthProvider();


   const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        setSuccess("Login successfull");
        setError("");
        navigate(from,{replace:true})
    })
    .catch((error)=>{
        console.log(error)
        setError(error.message);
        setSuccess("")
    })
   }
 
   const handleGithunSignIn=()=>{
    console.log("Github mama is Comming")
   }


    return (
        <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
           <div className='form_container p-5  rounded bg-white'>
               <form onSubmit={ handleLogin}>
                 <h3 className='text-center'>Sign In</h3>
                 {/* Email */}
                 <div className='mb-2'>
                    <label htmlFor='email' >Email</label>
                    <input type="email" name='email' placeholder='Enter your Email' className='form-control'/>
                 </div>


                 {/* Password  */}
                 <div className='mb-2'>
                    <label htmlFor='password' >Password</label>
                    <input type="password" name='password' placeholder='Enter your Password' className='form-control'/>
                 </div>
                 <div>
                    <p className="text-success"><small>{success}</small></p>
                    <p className='text-danger'><small>{error}</small></p>
                 </div>

                <div className='d-grid mb-2'>
                    <button className='btn btn-primary'>Sign in</button>

                </div>
                
               </form>
               <div className='d-grid mb-2'>
                    <button className='btn btn-primary' onClick={handleGoogleSignIn}><FaGoogle/>  Google</button>

                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary' onClick={handleGithunSignIn}><FaGithub/>  Github</button>

                </div>
               <p className='text-end mt-2'><small>Don't have an account? Plaese! <span><Link to="/register">Sign Up</Link></span></small></p>
           </div>
        </div>
    );
};

export default Login;