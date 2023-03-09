import React from 'react';
import proptypes from 'prop-types';
import Types from '../types/Types';
import './ContentType.css';

export default function ContentType({types}) {
  return (
    <div className="content-type">
      <div className='content-type-header'>
        <h2>Content Types</h2>
      </div>
      <div className='content-type-body'>
        <Types types={types}/>
      </div>
    </div>
  );
}

ContentType.propTypes = {
  types: proptypes.array.isRequired
};