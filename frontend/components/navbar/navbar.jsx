import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class Navbar extends React.Component {

  render () {
    return (
      <nav className="navbar">
        <span className="logo">LOGO</span>
        <div>
          <button className="session-option-buttons"
            onClick={() => this.props.openModal('signup')}>
            Sign Up
          </button>
          <button className="session-option-buttons"
            onClick={() => this.props.openModal('login')}>
            Log In
          </button>
        </div>
      </nav>
    )
  }
}

const msp = (state) => {
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