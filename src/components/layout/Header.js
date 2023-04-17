import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <div className="header-home">
        <Link to="/">Home</Link>
      </div>
      <div className="header-other">
        <Link to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
