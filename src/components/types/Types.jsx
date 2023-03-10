import React from 'react';
import proptypes from 'prop-types';
import Modal from '../modal/Modal';
import Field from '../field/Field';
import searchimg from '../../assets/icon-search-dark.png';
import './Types.css';

export default function Types({types, onSave, onChange, clickHandler, selectedType, setShow, show}) {
  return (
    <div className='content-type-body'>
      <div className="left">
        <div className='left-header'>
          <a>{types.length} types</a>
          <img src={searchimg} alt="icon" />
        </div>
        <div className='add-new-type-btn'>
          <button onClick={() => setShow(true)} > + New Type </button>
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
                <label>Add New Type</label>
              </div>
              <div>
                <input type="text" onChange={onChange} style={{height:'3.5vh', width:'15rem'}} />
              </div>
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
  types: proptypes.array.isRequired,
  onSave: proptypes.func.isRequired,
  onChange: proptypes.func.isRequired,
  clickHandler: proptypes.func.isRequired,
  selectedType: proptypes.object.isRequired,
  setShow: proptypes.func.isRequired,
  show: proptypes.bool.isRequired
};