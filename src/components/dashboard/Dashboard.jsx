import React, {useState, useEffect} from 'react';
import ContentType from '../contentType/ContentType';
import EntryDetails from '../entryDetails/EntryDetails';
import iconimg from '../../assets/icon-search-dark.png';
import './Dashboard.css';
import axios from 'axios';
import { API_URL } from '../../constants/url';

export default function Dashboard() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState({});
  const [show, setShow] = useState(false);
  const [newType, setNewType] = useState({});
  const [click, setClick] = useState(false);
  const [collection, setCollection] = useState({});
  const [input, setInput] = useState({});
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
  }, [newType]);
  const clickHandler = (type) => {
    setSelectedType(type);
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSave = async() => {
    await axios.post(API_URL + '/contents', {
      name: input
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setNewType({});
    setShow(false);
  };
  const onClickCollection = (value, type) => {
    setClick(value);
    setCollection(type);
  };
  return (
    <div className="dashboard-page">
      <div className="container-left">
        <div className='container-left-header'>
          <h1>CMS+</h1>
        </div>
        <div className='container-left-content'>
          <div className='dashboard-header'> 
            <a>COLLECTION TYPES</a> 
            <img src={iconimg} alt="icon" />
          </div>
          <ul>
            {
              types.map(type => (
                <li key={type.id} onClick={() => onClickCollection(true, type)} style={{cursor: 'pointer'}}>{type.name}</li>
              ))
            }
          </ul>
        </div>
        <div className='content-type-builder' onClick={() => onClickCollection(false)}>
          <h3>CONTENT TYPE BUILDER</h3>
        </div>
      </div>
      <div className="container-right">
        {
          !click ? 
            (<ContentType types={types} onSave={onSave} onChange={onChange} clickHandler={clickHandler} selectedType={selectedType} setShow={setShow} show={show}/>)
            : 
            (<EntryDetails collection={collection}/>)
        }
      </div>
    </div>
  );
}