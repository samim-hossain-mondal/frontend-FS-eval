import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../../constants/url';
import registerImg from '../../assets/undraw-upload-re-pasx.png';
import './Register.css';

export default function Register (){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    await axios.post(AUTH_URL + '/register', {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response);
      });
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className='register-left'>
        <div className="register-header">
          <a><b>Design APIs fast,</b></a>
          <a><b>Manage content easily.</b></a>
        </div>
        <div className="register-img">
          <img src={registerImg} alt="register" />
        </div>
      </div>
      <div className="register-right">
        <h1>Create your CMS+ account</h1>
        <div className="register-form">
          <div className='register-form-input'>
            <label>Email</label>
            <input type="text" onChange = {handleEmailChange} />
          </div>
          <div className='register-form-input'>
            <label>Password</label>
            <input type="password" onChange = {handlePasswordChange} />
          </div>
          <button onClick = {handleRegister}>
            Register
          </button>
          <Link to='/'> <a> Back to login page </a> </Link>
        </div>
      </div>
    </div>
  );
}