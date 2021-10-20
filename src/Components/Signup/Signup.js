import React, {useState} from 'react';
import loginBg from '../../images/bg.png'
import {Link,} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import './Signup.css'
const Signup = () => {

 





const auth = getAuth();


   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('');



    const {signInUsingGoogle, } = useAuth();
     
   const handleEmailChange = e => {
       
       setEmail(e.target.value);
   }
   const handlePasswordChange = e => {
       setPassword(e.target.value);
   }

     const handleRagistration = e =>{
          e.preventDefault();
          if(password.length < 6){
              setError('Password should be atleast 6 character long')
              return;
          }
         createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
             const user = result.user;
             console.log(user);
         })
      
   }















    return (
        <div className="loginMainDiv">
           <div className="d-flex justify-content-around  align-items-center">
           
               <div className="loginDetails me-5 ">
               

                  <h4 className="mb-4 ff fc"> Please Sign Up Here</h4>
               <form onSubmit={handleRagistration}>
  <div className="row mb-3">
    
    <div className="col-sm-10">
      <input type="email" onBlur={handleEmailChange} className="form-control ms-4" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="row mb-3">
   
    <div className="col-sm-10">
      <input type="password" onBlur={handlePasswordChange}  className="form-control ms-4" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
   <p className="mt-3">Already Signed up? Click <Link to="/login">Log In</Link></p>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger">{error}</div>
  <button onClick={handleRagistration} type="submit" className="btn btn-primary">Sign in</button>
  <button onClick={signInUsingGoogle}  className="btn btn-success ms-4"> Log in with Google</button>
</form>


               
               
               </div>

               <div className="loginBgImg ms-5 "><img src={loginBg} alt="Background Img"/></div>
           
           
           
           </div>
            







        </div>
    );
};

export default Signup;