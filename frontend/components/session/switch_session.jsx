import React from 'react';

const SwitchSession = ({props}) => {
  let otherModal;
  let text;
  let buttonText;

  if (props.modal === 'SIGN UP') {
    otherModal = 'login';
    text = 'Already a user?'
    buttonText = 'Log In';
  } else {
    otherModal = 'signup';
    text = 'Don\'t have an account?';
    buttonText = 'Sign Up';
  }

  return (
    <React.Fragment>
      <h3 className='switch-session-text'>{text}</h3>
      <h3 className='switch-session-button' type='submit' onClick={() => props.openModal(otherModal)}>{buttonText}</h3>
    </React.Fragment>
  )
}

export default SwitchSession;