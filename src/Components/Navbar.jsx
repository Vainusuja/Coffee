import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout, isAdmin }) => {
  if (!isAdmin) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">Perk Up Café</Link>
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">Home</Link>
          <Link to="/menu" className="navbar-link">Menu</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
          <Link to="/cart" className="navbar-link">Cart</Link>
          <button onClick={onLogout} className="navbar-logout">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
