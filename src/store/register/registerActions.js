import api from "../../axios/axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./registerTypes";
export const register = (email, username, password) => {
  return (dispatch) => {
    dispatch(registerRequest());
    api
      .post("https://vfls.herokuapp.com/user/register/", {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("User successfully registered");
          console.log(response.data);
          dispatch(registerSuccess([response.data]));
        } else {
          dispatch(registerFailure(response));
        }
      })
      .catch((error) => {
        dispatch(registerFailure(error.response));
      });
  };
};

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};
