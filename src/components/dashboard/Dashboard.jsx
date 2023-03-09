import React from 'react';
import CompanyProfile from '../companyProfile/CompanyProfile';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="container-left">
        <div className='container-left-header'>
          <h1>CMS+</h1>
        </div>
        <div className='container-left-content'>
          <h3>COLLECTION TYPES</h3>
          <ul>
            <li>Blog</li>
            <li>Product</li>
            <li>Page</li>
          </ul>
        </div>
        <div className='content-type-builder'>
          <h3>CONTENT TYPE BUILDER</h3>
        </div>
      </div>
      <div className="container-right">
        <CompanyProfile />
      </div>
    </div>
  );
}