import axios from "axios";
import api from "../../axios/axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./loginTypes";

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("https://vfls.herokuapp.com/login/", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          api.defaults.headers["Authorization"] = "JWT " + response.data.access;
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          console.log(response.data.access);
          console.log(response.data.refresh);
          dispatch(loginSuccess([response.data.refresh, response.data.access]));
        } else {
          dispatch(loginFailure(response));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error.response));
      });
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (tokens) => {
  return {
    type: LOGIN_SUCCESS,
    payload: tokens,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
