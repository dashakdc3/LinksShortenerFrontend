import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/login/loginActions";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../header/header";
import store from "../../store/store";
function Login({ userData, login }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    login(username, password);
    if (store.getState().login.users.length === 2) {
      navigate("/home");
    }
  };
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return alert("You were successfully signed out");
  };
  return (
    <React.Fragment>
      <Header />
      <section className="main">
        <form className="form1" onSubmit={submit}>
          <p className="sign" align="center">
            Sign In
          </p>
          <input
            className="un "
            type="text"
            align="center"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setusername(event.target.value)}
          />
          <input
            className="pass"
            type="password"
            align="center"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="submit" align="center">
            Sign In
          </button>
          <p className="forgot" align="center">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
          <p className="forgot" align="center">
            <a href="" onClickCapture={logout}>
              Or Sign out
            </a>
          </p>
        </form>
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
