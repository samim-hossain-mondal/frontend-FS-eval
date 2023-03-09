import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="container-left">
        <div>
          <h1>CMS+</h1>
        </div>
        <div>
          <h3>Collection Types</h3>
          <ul>
            <li>Blog</li>
            <li>Product</li>
            <li>Page</li>
          </ul>
        </div>
      </div>
      <div className="container-right">
        <div>
          <h3>Content Types</h3>
        </div>
        <div>
          <h3>Content</h3>
        </div>
      </div>
    </div>
  );
}