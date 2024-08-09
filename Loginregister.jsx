/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import './Loginregister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {MdEmail } from "react-icons/md";
import {WiAlien  } from "react-icons/wi";
import { RiLockPasswordFill } from "react-icons/ri";
 const Loginregister = () => {
    const [action, setAction] = useState('');
    const registerLink = () => {
        setAction('active');
    }
    const LoginLink = () => {
      setAction('');
  }

  function notify2() {
    toast('🦄 password doesnot match', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: toast.Zoom,
    });
  }

  function notify1() {
    toast('🦄 Registered successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: toast.Zoom,
    });
  }

  function notify() {
    toast('🦄 Login successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: toast.Zoom,
    });
  }
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword]= useState("");
  const [email, setEmail] = useState("");
  const getUsername = (event) =>{
    setUsername(event.target.value);
    //console.log(userName);  
    }
  
    const getemail = (event)=> {
      setEmail(event.target.value);
      //console.log(email);
    }
  const getPassword = (event) =>{
    setPassword(event.target.value);
    //console.log(password);
      }
  
  const getconfirmpassword =(event) =>{
     setconfirmPassword(event.target.value);
    // console.log(confirmpassword); 
     }
  
  const loginDetails = (event) => {
    console.log(`The user details has been submitted with username:${userName} password:${password}`);
  }

  const registerDetails = (event) => {
    console.log(`The user details has been submitted with username:${userName} email:${email} password:${password} re-enter password:${confirmpassword}`);
  }

  const confirm = () => {
    if(password !== confirmpassword){
      notify2();
    }else {
      notify1();
    }
     }

     const confirmlogin = () => {
      notify();
     }

  return (
    <div>
    <ToastContainer />
    <div className={`wrapper ${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>LOGIN</h1>
          <div className="input-box">
            <input type="text" placeholder='username'  onChange={getUsername} required />
            <WiAlien className='icon'/>
          </div>
         
          <div className="input-box">
            <input type="password" placeholder='Password' onChange={getPassword}required />
            <RiLockPasswordFill className='icon'/>
          </div>
          <div className="remember">
            <label><input type="checkbox" required/> Remember me </label>
            <a href='#'> Forgot password</a> 
          </div>
          <button type="submit" onClick={() => {loginDetails(); confirmlogin(); } }>Login</button>
          <div className='register-link'>
          <p> Don't have an account?<a href='#' onClick={registerLink}>Register</a></p>
          
          </div>
        </form>
      </div>
      

      <div className="form-box register">
        <form action="">
          <h1>REGISTER</h1>
          <div className="input-box">
            <input type="text" placeholder='username'onChange={getUsername} required />
            <WiAlien className='icon'/>
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' onChange={getemail}required />
            <MdEmail className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' onChange={getPassword}required />
            <RiLockPasswordFill className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Re-enter Password' onChange={getconfirmpassword} required />
            <RiLockPasswordFill className='icon'/>
          </div>
          <div className="remember">
            <label><input type="checkbox"required />I agree terms & conditions! </label>
          </div>
          <button type="submit" onClick={() => { registerDetails(); confirm(); } }>Register</button>
          <div className='register-link'>
          <p> Already have an accunt<a href='#' onClick={LoginLink}>Login</a></p>
          
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
  
export default Loginregister;
