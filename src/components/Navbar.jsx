import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Keep Notes</div>
      <div className="links">
        <Link to="/">About</Link>
        <Link to="/dashboard">Notes</Link>
        <Link to="/signup">Account</Link>
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
