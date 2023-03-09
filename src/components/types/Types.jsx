import React, {useState} from 'react';
import proptypes from 'prop-types';
import Modal from '../modal/Modal';
import Field from '../field/Field';
import {API_URL} from '../../constants/url';
import './Types.css';
import axios from 'axios';

export default function Types({types}) {
  const [selectedType, setSelectedType] = useState({});
  const [show, setShow] = useState(false);
  const [newType, setNewType] = useState({});
  const clickHandler = (type) => {
    setSelectedType(type);
  };
  const onChange = (e) => {
    setNewType(e.target.value);
  };
  const onSave = async() => {
    await axios.post(API_URL + '/contents', {
      name: newType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setShow(false);
  };
  console.log(selectedType);
  return (
    <div className='content-type-body'>
      <div className="left">
        <div>
          <a>{types.length} types</a>
        </div>
        <div className='add-new-type-btn'>
          <button onClick={() => setShow(true)} > + New Type </button>
          <Modal title="My Modal" onClose={() => setShow(false)} show={show}
            onSave={onSave}
          >
            <div className='create-content'>
              <label>Create a new content type</label>
              <input type="text" onChange={onChange}/>
            </div>
          </Modal>
        </div>
        <div className='list-types'>
          {
            types.map(type => (
              <a onClick={() => clickHandler(type)} key={type.id}>{type.name}</a>
            ))
          }
        </div>
      </div>
      {
        selectedType.name && <Field type={selectedType} />
      }
    </div>
  );
}

Types.propTypes = {
  types: proptypes.array.isRequired
};