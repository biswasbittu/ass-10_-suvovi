import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const {signInUser} =useContext(AuthContext);

    const handleLogin=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email= form.email.value;
        const password=form.password.value
        console.log(email,password)
        signInUser(email,password)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser)

        })
        .catch((error)=>{
            console.log(error)
        })
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

                <div className='d-grid mb-2'>
                    <button className='btn btn-primary'>Sign in</button>

                </div>
                <div className='d-grid mb-2'>
                    <button className='btn btn-primary'><FaGoogle/>  Google</button>

                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'><FaGithub/>  Github</button>

                </div>
               </form>
               <p className='text-end mt-2'><small>Don't have an account? Plaese! <span><Link to="/register">Sign Up</Link></span></small></p>
           </div>
        </div>
    );
};

export default Login;