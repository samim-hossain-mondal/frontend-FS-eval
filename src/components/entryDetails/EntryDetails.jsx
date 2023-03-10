import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ModalForm from '../modalForm/ModalForm';
import proptypes from 'prop-types';
import { API_URL } from '../../constants/url';
import trashimg from '../../assets/trash-delete-recycle-bin-bucket-waste.png';
import editimg from '../../assets/user-edit-text-message-note.png';
import './EntryDetails.css';

export default function EntryDetails({collection}) {
  const [show, setShow] = useState(false);
  const [entry, setEntry] = useState([]);
  const fetchEntry = async () => {
    const response = await axios.get(`${API_URL}/collections/${collection.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setEntry(response.data);
  };
  useEffect(() => {
    fetchEntry();
  }, [collection.id]);
  const onDelete = async (id) => {
    await axios.delete(`${API_URL}/collections/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    fetchEntry();
  };
  const handleAddNewEntrySubmit = async (e) => {
    e.preventDefault();
    const data = {} ;
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    await axios.post(`${API_URL}/collections/${collection.id}`, {
      entry: data
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setShow(false);
    fetchEntry();
  };
  return (
    <div className="entry">
      <div className="entry-header">
        <h2>Entry Details</h2>
      </div>
      <div className="entry-body">
        <div className="entry-body-header">
          <div className="entry-body-header-1">
            <h3>{entry.length} {entry.length > 1 ? 'Entries Found' : 'Entry Found'}</h3>
          </div>
          <div className="entry-body-header-2">
            <button onClick={() => setShow(true)}>Add a new entry</button>
            <ModalForm title="Add New Entry" onClose={() => setShow(false)} show={show}
            >
              <hr />
              <div>
                {
                  <form onSubmit={handleAddNewEntrySubmit} className='create-content'>
                    {
                      collection.field.map((item) => (
                        <div key={item.id} className="fields">
                          <label style={{fontSize:'1.2rem'}}>{item}</label>
                          <input type="text" name={item} style={{height:'3.5vh', width:'15rem'}}/>
                        </div>
                      ))
                    }
                    <button id="add-entry-btn">Add</button>
                  </form>
                }
              </div>
            </ModalForm>
          </div>
        </div>
        <div className="entry-body-content">
          <div className="entry-body-container">
            {
              <div className="entry-body-content-1" style={{backgroundColor: 'transparent', fontSize: '1.15rem'}}>
                {collection.field.map((item, index) => (
                
                  <div key={index} className="entry-body-content-1-1">
                    <a>{item}</a>
                  </div>
               
                ))
                }
                <a>Actions</a>
              </div>
            }
            
          </div>
          {
            entry.length < 1 ?
              <div>
              </div>
              :
              (
                <div className="entry-body-container">
                  {
                    entry.map((item, index) => (
                      <div key={index} className="entry-body-content-1">
                        {
                          Object.values(item.entry).map((value, index) => (
                            <div key={index} className="entry-body-content-1-1">
                              <a>{value}</a>
                            </div>
                          ))
                        }
                        <div className='editors'>
                          <img src={editimg} alt="edit" />
                          <img onClick={() => onDelete(item.id)} src={trashimg} alt="trash" />
                        </div>
                      </div>
                    ))
                  }
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
}

EntryDetails.propTypes = {
  collection: proptypes.array.isRequired,
  types: proptypes.array.isRequired
};