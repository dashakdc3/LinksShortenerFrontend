import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../store/register/registerActions";
import { connect } from "react-redux";
import "../login/login.css";
import Header from "../../header/header";
function Register({ userData, register }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = (event) => {
    event.preventDefault();
    register(email, username, password);
  };
  return (
    <React.Fragment>
      <Header />
      <section className="main">
        <form className="form1" onSubmit={submit}>
          <p className="sign" align="center">
            Sign Up
          </p>
          <input
            className="un"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="un"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="un"
            type="password"
            minLength="12"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="submit" align="center">
            Sign Up
          </button>
        </form>
        <p className="forgot" align="center">
          Have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, username, password) =>
      dispatch(register(email, username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
