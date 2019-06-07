import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

import SessionFormContainer from '../../components/session/session_form_container';

function Modal({modal, closeModal}) {
  if (!modal) return null;
  let component;

  switch (modal) {
    case 'signup':
    case 'login':
      component = <SessionFormContainer />;
      break;
    
    default:
      return null;
  }

  return (
    <section className="modal-background" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </section>
  )
}

const msp = (state) => {
  return {
    modal: state.ui.modal
  }
}

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(Modal);