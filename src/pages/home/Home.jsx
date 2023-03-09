import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      {
        localStorage.getItem('token') ? <h5>your token: {localStorage.getItem('token')}</h5> : null
      }
    </div>
  );
}