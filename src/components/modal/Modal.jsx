import React, { useEffect } from 'react';
import proptypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

export default function Modal(props){
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{props.title}</h3>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              Close
            </button>
            <button onClick={props.onSave} className="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

Modal.propTypes = {
  onClose: proptypes.func.isRequired,
  show: proptypes.bool,
  title: proptypes.string,
  children: proptypes.node,
  onSave: proptypes.func
};


