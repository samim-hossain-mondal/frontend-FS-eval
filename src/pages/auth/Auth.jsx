import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../../constants/url';
import loginImg from '../../assets/undraw-upload-re-pasx.png';
import './Auth.css';

export default function Auth (){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleRegister = async () => {
  //   await axios.post(AUTH_URL + '/register', {
  //     email: email,
  //     password: password,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  const handleLogin = async () => {
    await axios.post(AUTH_URL + '/login', {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response);
        if(response.data.data){
          localStorage.setItem('token', response.data.data);
          navigate('/home');
        }
        else{
          alert('Invalid Credentials');
        }
      });
  };

  {/* <div className="register">
        <h1>Register</h1>
        <input type="text" onChange={ handleEmailChange } />
        <label>Enter email</label>
        <input type="password" onChange={handlePasswordChange} />
        <label>Enter Password</label>
        <button onClick={handleRegister}>
            Register
        </button>
      </div> */}

  return (
    <div className="login-page">
      <div className='login-left'>
        <div className="login-header">
          <a><b>Design APIs fast,</b></a>
          <a><b>Manage content easily.</b></a>
        </div>
        <div className="login-img">
          <img src={loginImg} alt="login" />
        </div>
      </div>
      <div className="login-right">
        <h1>Login to your CMS+ account</h1>
        <div className="login-form">
          <div className='login-form-input'>
            <label>Email</label>
            <input type="text" onChange = {handleEmailChange} />
          </div>
          <div className='login-form-input'>
            <label>Password</label>
            <input type="password" onChange = {handlePasswordChange} />
          </div>
          <button onClick = {handleLogin}>
            Login
          </button>
          <Link to="/register"> <a> Forget password? </a> </Link> 
        </div>
      </div>
    </div>
  );
}