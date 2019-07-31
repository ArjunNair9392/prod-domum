import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../css/header.css';

const Navbar = () => {
  return (
    <nav className="navbarStyle nav-wrapper light-blue lighten-1">
      <div className="container">
        <Link to='/' className="brand-logo">
          Domum
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
