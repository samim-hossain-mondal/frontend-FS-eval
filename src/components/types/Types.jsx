import React from 'react';
import proptypes from 'prop-types';
import Modal from '../modal/Modal';
import Field from '../field/Field';
import './Types.css';

export default function Types({types, onSave, onChange, clickHandler, selectedType, setShow, show}) {

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
  types: proptypes.array.isRequired,
  onSave: proptypes.func.isRequired,
  onChange: proptypes.func.isRequired,
  clickHandler: proptypes.func.isRequired,
  selectedType: proptypes.object.isRequired,
  setShow: proptypes.func.isRequired,
  show: proptypes.bool.isRequired
};