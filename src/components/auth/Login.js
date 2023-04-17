import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { loginUser, getUsers } from "../../actions/users";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = ({ loginUser, getUsers, users: { users, logged } }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (logged) {
      navigate("/");
    }
    getUsers();
  }, []);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const { username, email } = formData;
  const onChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    const res = users.filter(u => u.username === username && u.email === email);
    if (res.length >= 1) {
      loginUser(res[0]);
      navigate("/");
    } else {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
    setFormData({ username: "", email: "" });
  };
  return (
    <div className="register">
      <h1>Login</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className="input">
          <p>Username:</p>
          <input
            onChange={e => onChange(e)}
            value={username}
            type="text"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="input">
          <p>Email:</p>
          <input
            onChange={e => onChange(e)}
            value={email}
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <input className="btn" type="submit" value="Submit"></input>
      </form>

      {error ? <h2>Dados inválidos</h2> : ""}
    </div>
  );
};

Register.propTypes = {
  loginUser: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, { loginUser, getUsers })(Register);
