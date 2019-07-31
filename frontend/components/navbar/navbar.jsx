import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

function Navbar(props) {
  if (props.current_user) return null;

  return (
    <nav className="navbar">
      <span className="logo">LOGO</span>
      <div>
        <button className="session-option-buttons"
          onClick={() => props.openModal('signup')}>
          Sign Up
        </button>
        <button className="session-option-buttons"
          onClick={() => props.openModal('login')}>
          Log In
        </button>
      </div>
    </nav>
  )
}

const msp = (state) => {
  debugger
  return {
    current_user: state.entities.users[state.session.currentUserId],
  }
}

const mdp = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  }
}



export default connect(msp, mdp)(Navbar);