import React, {useState} from 'react';
import Modal from '../modal/Modal';
import trashimg from '../../assets/trash-delete-recycle-bin-bucket-waste.png';
import editimg from '../../assets/user-edit-text-message-note.png';
import proptypes from 'prop-types';

export default function EditDelete({ field, onEdit, onDelete, onChangeEdit}) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className='option'>
      <div className='edit'>
        <img src={editimg} onClick={() => setShowEdit(true)} />
        <Modal title="My Modal" onClose={() => setShowEdit(false)} show={showEdit}
          onSave={() => onEdit(field, setShowEdit)}>
          <div className='create-content'>
            <label>Edit field</label>
            <input type="text" onChange={onChangeEdit}/>
          </div>
        </Modal>
      </div>
      <div className='delete'>
        <img src={trashimg} onClick={() => onDelete(field)} />
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