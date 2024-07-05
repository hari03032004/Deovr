import Button from '../components/Button';
import {useState} from 'react';
import "../index.css";
import { FaUserCircle } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TopNavbar from '../components/TopNavbar';
import { Link } from 'react-router-dom';
export default function Signup() {
  const [eye,setEye]=useState(false);
  function handleClick(){
    setEye(!eye);
    if(eye){
      document.getElementById("password").type = "text";
    }
    else{
      document.getElementById("password").type = "password";
    }
    
  }
  return (
    <div className="layout">
      <div className='nav-grid'></div>
      <div className='main-grid'>
        <TopNavbar/>
        <div className='sign-outer'>
          <div className='sign-inner'>
            <div className='sign-head'>
              <h2>Sign Up</h2>
            </div>
            <div className='line-align'>
              <div className="line"></div>
            </div>
            <div className='input-box'>
              <MdEmail />
              <input type='text' placeholder='Username' 
                className='text' id='username'
              />
            </div>
            <div className='input-box'>
              <FaUserCircle />
              <input type='email' placeholder='Email as login' 
                className='text' id='username'
              />
            </div>
            <div className='input-box'>
              <MdVpnKey />
              <input type='password' placeholder='Password -min. 6 symbols' 
                className='text' id='password'
              />
              {eye? <FaEyeSlash onClick={handleClick}/> :  <FaEye onClick={handleClick}/>} 

            </div>
            <div className='checkbox-agree'>
              <input type="checkbox" name="signed" id="sign" />
              <label><span className='agree'>I agree to the </span><a className='TC'>Terms and Conditions</a></label>
            </div>
            <div >
            </div>
            <div className='checkbox-email'>
                <input type="checkbox" name="signed" id="sign" />
                <label className='email'>Email me what's new and personal deals</label>
            </div>
            <div >
              <Button
                name='CREATE ACCOUNT'
                bgcolor="#39BAE5"
                color="black"
                width="300px"
              />
              <Link to="/user/signin">
                <Button
                name='SIGN IN'
                bgcolor="transparent"
                color="#39BAE5"
                width="300px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
