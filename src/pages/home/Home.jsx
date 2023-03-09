import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import './Home.css';

export default function Home() {
  return (
    <div className="HomePage">
      <Dashboard />
      {/* <h1>Home Page</h1>
      {
        localStorage.getItem('token') ? <h5>your token: {localStorage.getItem('token')}</h5> : null
      } */}
    </div>
  );
}