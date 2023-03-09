import React, {useState, useEffect} from 'react';
import Modal from '../modal/Modal';
import proptypes from 'prop-types';
import axios from 'axios';
import { API_URL } from '../../constants/url';  

export default function Field({ type }) {
  const [currentFields, setCurrentFields] = useState(type.field);
  const [field, setField] = useState('');
  const [show, setShow] = useState(false);
  const onChange = (e) => {
    setField(e.target.value);
  };
  const fetchFields = async () => {
    const response = await axios.get(`${API_URL}/contents/${type.name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setCurrentFields(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchFields();
  }, [field]);
  const onSave = async () => {
    await axios.post(`${API_URL}/contents/${type.name}`, {
      field: field
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setShow(false);
    setField('');
  };
  console.log(currentFields);
  return (
    <div className="right">
      <div className='right-header'>
        <a1>{type.name}</a1>
        <a2>
          {currentFields.length} {currentFields.length > 1 ? 'fields' : 'field'}
        </a2>
      </div>
      <div className='right-body'>
        <div className='add-new-type-btn'>
          <button onClick={() => setShow(true)}>Add another field</button>
          <Modal title="My Modal" onClose={() => setShow(false)} show={show}
            onSave={onSave}
          >
            <div className='create-content'>
              <label>Add another field</label>
              <input type="text" onChange={onChange}/>
            </div>
          </Modal>
        </div>
        <div className='fields'>
          { currentFields.map((field, index) => (
            <div key={index} className='field'>
              <div className='field-header'>
                <div className='field-header-1'>
                  <a1>Ab</a1>
                </div>
                <div className='field-header-2'>
                  <a2>
                    {field}
                  </a2>
                </div>
              </div>
              <div className='field-body'>
                <a>Text</a>
              </div>
              <div className='option'>
                <div className='edit'>
                  <button>edit</button>
                </div>
                <div className='delete'>
                  <button>delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Field.propTypes = {
  type: proptypes.object.isRequired,
};