import React, {useState, useEffect} from 'react';
import ContentType from '../contentType/ContentType';
import './Dashboard.css';
import axios from 'axios';
import { API_URL } from '../../constants/url';

export default function Dashboard() {
  const [types, setTypes] = useState([]);
  const fetchTypes = async () => {
    const response = await axios.get(`${API_URL}/contents`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setTypes(response.data);
  };
  useEffect(() => {
    fetchTypes();
  }, []);
  console.log(types);
  return (
    <div className="dashboard-page">
      <div className="container-left">
        <div className='container-left-header'>
          <h1>CMS+</h1>
        </div>
        <div className='container-left-content'>
          <h3>COLLECTION TYPES</h3>
          <ul>
            {
              types.map(type => (
                <li key={type.id}>{type.name}</li>
              ))
            }
          </ul>
        </div>
        <div className='content-type-builder'>
          <h3>CONTENT TYPE BUILDER</h3>
        </div>
      </div>
      <div className="container-right">
        <ContentType types={types}/>
      </div>
    </div>
  );
}