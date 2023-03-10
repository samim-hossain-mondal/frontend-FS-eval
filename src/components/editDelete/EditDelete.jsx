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
        <Modal title="EDIT" onClose={() => setShowEdit(false)} show={showEdit}
          onSave={() => onEdit(field, setShowEdit)}>
          <div className='create-content' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{padding: '20px', fontSize: '1.2rem'}}>
              <label>Edit field</label>
            </div>
            <div>
              <input type="text" onChange={onChangeEdit} style={{height:'3.5vh', width:'15rem'}} />
            </div>
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