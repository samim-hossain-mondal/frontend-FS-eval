import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AUTH_URL } from '../../constants/url';
import './Auth.css';

export default function Auth (){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    await axios.post(AUTH_URL + '/register', {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response);
      });
  };

  const handleLogin = async () => {
    await axios.post(AUTH_URL + '/login', {
      username: username,
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

  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <input type="text" onChange={ handleUsernameChange } />
        <label>Enter Username</label>
        <input type="password" onChange={handlePasswordChange} />
        <label>Enter Password</label>
        <button onClick={handleRegister}>
            Register
        </button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" onChange = {handleUsernameChange} />
        <label>Enter Username</label>
        <input type="password" onChange = {handlePasswordChange} />
        <label>Enter Password</label>
        <button onClick = {handleLogin}>
            Login
        </button>
      </div>
    </div>
  );
}