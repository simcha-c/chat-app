import React from 'react';

const Navbar = function(props) {
  return (
    <nav className="navbar">
      <span className="logo">LOGO</span>
      <div className="session-options">
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </nav>
  )
};

export default Navbar;