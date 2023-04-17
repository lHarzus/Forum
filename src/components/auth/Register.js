import React, { useState } from "react";
import PropTypes from "prop-types";
import { addUser } from "../../actions/users";
import { connect } from "react-redux";

const Register = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
  });
  const { name, username, email, street, suite, city, zipcode, lat, lng } =
    formData;
  const onChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    addUser({
      name,
      username,
      email,
      address: { street, suite, city, zipcode, geo: { lat, lng } },
    });
    setFormData({
      name: "",
      username: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "",
    });
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className="input">
          <p>Full name:</p>
          <input
            onChange={e => onChange(e)}
            value={name}
            type="text"
            placeholder="Full name"
            name="name"
          />
        </div>
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
        <div className="input-address">
          <p>Adress:</p>
          <input
            onChange={e => onChange(e)}
            value={street}
            type="text"
            placeholder="Street"
            name="street"
          />
          <input
            onChange={e => onChange(e)}
            value={suite}
            type="text"
            placeholder="Suite"
            name="suite"
          />
          <input
            onChange={e => onChange(e)}
            value={city}
            type="text"
            placeholder="City"
            name="city"
          />
          <input
            onChange={e => onChange(e)}
            value={zipcode}
            type="text"
            placeholder="Zipcode"
            name="zipcode"
          />
          <p>Geographic coords:</p>
          <input
            onChange={e => onChange(e)}
            value={lat}
            type="text"
            placeholder="lat"
            name="lat"
          />
          <input
            onChange={e => onChange(e)}
            value={lng}
            type="text"
            placeholder="long"
            name="lng"
          />
        </div>
        <input className="btn" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

Register.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, { addUser })(Register);
