import React from 'react';

const SwitchSession = ({props}) => {
  const otherModal = props.modal === 'SIGN UP' ? 'login' : 'signup';
  return (
    <React.Fragment>
      <h3 onClick={() => props.openModal(otherModal)}>CLICK ME</h3>
    </React.Fragment>
  )

}

export default SwitchSession;