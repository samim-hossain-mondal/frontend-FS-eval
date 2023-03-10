import React, {useState, useEffect} from 'react';
import Modal from '../modal/Modal';
import proptypes from 'prop-types';
import axios from 'axios';
import editimg from '../../assets/user-edit-text-message-note.png';
import EditDelete from '../editDelete/EditDelete';
import { API_URL } from '../../constants/url';  

export default function Field({ type }) {
  const [currentFields, setCurrentFields] = useState(type.field);
  const [input, setInput] = useState('');
  const [field, setField] = useState('');
  const [editField, setEditField] = useState('');
  const [show, setShow] = useState(false);
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onChangeEdit = (e) => {
    setEditField(e.target.value);
  };
  const fetchFields = async () => {
    const response = await axios.get(`${API_URL}/contents/${type.name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setCurrentFields(response.data);
  };
  useEffect(() => {
    fetchFields();
  }, [field, type.name]);
  const onSave = async () => {
    await axios.post(`${API_URL}/contents/${type.name}`, {
      field: input
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setShow(false);
    setField(input);
    window.location.reload();
  };
  const onDelete = async (fieldname) => {
    await axios.delete(`${API_URL}/contents/${type.name}/${fieldname}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    fetchFields();
  };
  const onEdit = async (fieldname, setShowEdit) => {
    await axios.patch(`${API_URL}/contents/${type.name}/${fieldname}`, {
      field: editField
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setShowEdit(false);
    setEditField('');
    fetchFields();
  };
  return (
    <div className="right">
      <div className='right-header'>
        <div className='right-header-1'>
          <a1>{type.name}</a1>
          <img src={editimg} alt="edit" />
        </div>
        <a2>
          {currentFields.length} {currentFields.length > 1 ? 'fields' : 'field'}
        </a2>
      </div>
      <div className='right-body'>
        <div className='add-new-type-btn'>
          <button onClick={() => setShow(true)}>Add another field</button>
          <Modal title="ADD" onClose={() => setShow(false)} show={show}
            onSave={onSave}
          >
            <div className='create-content' style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{padding: '20px', fontSize: '1.2rem'}}>
                <label>Add Field</label>
              </div>
              <div>
                <input type="text" onChange={onChange} style={{height:'3.5vh', width:'15rem'}} />
              </div>
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
              <EditDelete field={field} onEdit={onEdit} onDelete={onDelete} onChangeEdit={onChangeEdit}/>
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