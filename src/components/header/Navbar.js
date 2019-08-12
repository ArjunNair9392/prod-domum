import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import '../css/header.css';

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> :<SignedOutLinks />;
  return (
    <nav className="navbarStyle nav-wrapper light-blue lighten-1">
      <div className="container">
        <Link to='/' className="brand-logo">
          Domum
        </Link>
        { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return {
      auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navbar);
