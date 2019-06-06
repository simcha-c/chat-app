import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';

class Navbar extends React.Component {

  render () {
    return (
      <nav className="navbar">
        <span className="logo">LOGO</span>
        <div>
          <button className="session-option-buttons">Sign Up</button>
          <button className="session-option-buttons">Log In</button>
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
    // signup: (user) => dispatch(signup(user)),
    // login: (user) => dispatch(login(user)),
  }
}



export default connect(msp, mdp)(Navbar);