import React, { useState } from 'react';
import loginBg from '../../images/bg.png'
import {Link, } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'

const Login = () => {

//    const [email, setEmail] = useState('')
//    const [password, setPassword] = useState('')
    const {signInUsingGoogle} = useAuth();
    

    
    const auth = getAuth();
    const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleEmailChange = e => {
       
       setEmail(e.target.value);
   }
   const handlePasswordChange = e => {
       setPassword(e.target.value);
   }







   const handleLogin = e =>{
          e.preventDefault();
         
         signInWithEmailAndPassword(auth, email, password)
         .then(result => {
             const user = result.user;
             console.log(user);
         })
      
   }



    return (
        <div className="loginMainDiv">

        
           <div className="d-flex justify-content-around  align-items-center">
           
               <div className="loginDetails me-5 ">
               <h4 className="mb-4 ff fc"> Please Log In Here</h4>
               <form onSubmit={handleLogin}>
  <div className="row mb-3">
    
    <div className="col-sm-10">
      <input type="email" onBlur={handleEmailChange} className="form-control ms-4" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="row mb-3">
   
    <div className="col-sm-10">
      <input type="password" onBlur={handlePasswordChange} className="form-control ms-4" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <p className="mt-3">Are you new? Click <Link to="/signup">Sign Up</Link></p>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
  <button onClick={signInUsingGoogle}  className="btn btn-success ms-4"> Log in with Google </button>
</form>
               
               
               </div>

               <div className="loginBgImg ms-5 "><img src={loginBg} alt="Background Img"/></div>
           
           
           
           </div>
            







        </div>
    );
};

export default Login;