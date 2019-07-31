import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const msp = (state) => {
  const modal = state.ui.modal === 'signup' ? 'SIGN UP' : 'LOG IN';
  return {
    modal,
    errors: state.ui.errors.errors,
  };
};

const mdp = (dispatch) => {
  return {
    handleSubmit: (action, user) => dispatch(action === 'SIGN UP' ? signup(user) : login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(msp, mdp)(SessionForm));