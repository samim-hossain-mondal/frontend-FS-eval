import React, {useState} from 'react';
import Modal from '../modal/Modal';
import proptypes from 'prop-types';

export default function EditDelete({ field, onEdit, onDelete, onChangeEdit}) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className='option'>
      <div className='edit'>
        <button onClick={() => setShowEdit(true)}>edit</button>
        <Modal title="My Modal" onClose={() => setShowEdit(false)} show={showEdit}
          onSave={() => onEdit(field, setShowEdit)}>
          <div className='create-content'>
            <label>Edit field</label>
            <input type="text" onChange={onChangeEdit}/>
          </div>
        </Modal>
      </div>
      <div className='delete'>
        <button onClick={() => onDelete(field)}>delete</button>
      </div>
    </div>
  );
}

EditDelete.propTypes = {
  field: proptypes.string,
  onEdit: proptypes.func,
  onDelete: proptypes.func,
  onChangeEdit: proptypes.func
};