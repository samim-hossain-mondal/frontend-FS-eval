import React from 'react';
import proptypes from 'prop-types';

export default function Field({ type }) {
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
          <button>Add another field</button>
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
                    {field[index]}
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
