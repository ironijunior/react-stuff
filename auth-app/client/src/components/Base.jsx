import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

const Base = ({ children }) => (
  <div>
    <div className="top-bar">

      <div className="top-bar-left">
        <IndexLink to="/">React App</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
