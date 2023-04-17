import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/users";

const Header = ({ users: { logged }, logout }) => {
  return (
    <div className="header">
      {logged ? (
        <Fragment>
          <div className="header-home">
            <Link to="/">Home</Link>
          </div>
          <div className="header-other">
            <p onClick={() => logout()}>
              Logout <i class="bi bi-box-arrow-right"></i>
            </p>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="header-home">
            <Link to="/">Home</Link>
          </div>
          <div className="header-other">
            <Link to="/Register">Register</Link>
            <Link to="/Login">
              Login<i class="bi bi-box-arrow-in-left"></i>
            </Link>
          </div>
        </Fragment>
      )}
    </div>
  );
};

Header.propTypes = {
  users: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, { logout })(Header);
