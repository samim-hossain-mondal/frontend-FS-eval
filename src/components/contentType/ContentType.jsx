import React from 'react';
import proptypes from 'prop-types';
import Types from '../types/Types';
import './ContentType.css';

export default function ContentType({types, onSave, onChange, clickHandler, selectedType, setShow, show}) {
  return (
    <div className="content-type">
      <div className='content-type-header'>
        <h2>Content Types</h2>
      </div>
      <div className='content-type-body'>
        <Types types={types} onSave={onSave} onChange={onChange} clickHandler={clickHandler} selectedType={selectedType} setShow={setShow} show={show}/>
      </div>
    </div>
  );
}

ContentType.propTypes = {
  types: proptypes.array.isRequired,
  onSave: proptypes.func.isRequired,
  onChange: proptypes.func.isRequired,
  clickHandler: proptypes.func.isRequired,
  selectedType: proptypes.object.isRequired,
  setShow: proptypes.func.isRequired,
  show: proptypes.bool.isRequired
};