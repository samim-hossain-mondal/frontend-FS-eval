import React, {useState} from 'react';
import Modal from '../modal/Modal';
import proptypes from 'prop-types';
import axios from 'axios';
import { API_URL } from '../../constants/url';  

export default function Field({ type }) {
  const [field, setField] = useState('');
  const [show, setShow] = useState(false);
  const onChange = (e) => {
    setField(e.target.value);
  };
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

  return (
    <div className="right">
      <div className='right-header'>
        <a1>{type.name}</a1>
        {console.log(type.field)}
        <a2>
          {type.field.length} {type.field.length > 1 ? 'fields' : 'field'}
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
          { type.field.map((field, index) => (
            <div key={index} className='field'>
              <div className='field-header'>
                <div className='field-header-1'>
                  <a1>Ab</a1>
                </div>
                <div className='field-header-2'>
                  <a2>
                    {field}
                    {console.log(field[index])}
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