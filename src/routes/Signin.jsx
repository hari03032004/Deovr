import Button from '../components/Button';
import {useState} from 'react';
import "../index.css";
import { FaUserCircle } from "react-icons/fa";
import { MdVpnKey } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import TopNavbar from '../components/TopNavbar';
import { Link } from 'react-router-dom';

export default function Signin() {
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
              <div div className='sign-head'>
                <h2>Sign In</h2>
              </div>
              <div className='line-align'>
                <div className="line"></div>
              </div>
              <div className='input-box'>
                <FaUserCircle />
                <input type='text' placeholder='Username' 
                  className='text' id='username'
                />
              </div>
              <div className='input-box'>
                <MdVpnKey />
                <input type='password' placeholder='Password' 
                className='text' id='password'
              />
              {eye? <FaEyeSlash onClick={handleClick}/> :  <FaEye onClick={handleClick}/>} 

              </div>
              <div className='check' >
                <div className='checkbox'>
                  <input type="checkbox" name="signed" id="sign" />
                  <label for="sign"> Keep me signed in</label>
                </div>
                <h4>FORGET PASSWORD</h4>
                </div>
              <div >
                <Button
                  name='SIGN IN'
                  bgcolor="#39BAE5"
                  color="black"
                  width="300px"
                />
                <Link to="/user/signup">
                  <Button
                    name='CREATE NEW ACCOUNT'
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
