import React from "react";
import { Link } from "react-router-dom";
import {  FaGithub, FaGoogle } from 'react-icons/fa';


const Registration = () => {
   
 
  return (
    <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
           <div className='form_container p-5  rounded bg-white'>
               <form >
                 <h3 className='text-center'>Sign Up</h3>
                 <div className='mb-2'>
                    <label htmlFor='name' >Full Name</label>
                    <input type="text" name='name' placeholder='Enter your Full-Name' className='form-control'/>
                 </div>

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

                 <div className='mb-2'>
                    <label htmlFor='purl' >Photo url</label>
                    <input type="text" name='name' placeholder='Enter your Full-Name' className='form-control'/>
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
               <p className='text-end mt-2'><small>Already have an Account please! <span><Link to="/login">Sign In</Link></span></small></p>
           </div>
        </div>
    
  );
};

export default Registration;
