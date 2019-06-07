import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = (state) => {
  const modal = state.ui.modal === 'signup' ? 'SIGN UP' : 'LOG IN';

  return {
    modal,
  };
};

const mdp = (dispatch) => {
  return {
    handleSubmit: (action, user) => dispatch(action === 'SIGN UP' ? signup(user) : login(user)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(SessionForm);