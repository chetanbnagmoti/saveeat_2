import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/auth.constants";
import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      Headers: {
        "Content-type": "applications/json",
      },
    };

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/user/brandLoginForPanel`,
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.data });
    localStorage.setItem("userInfo", JSON.stringify(res.data.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  window.location.href="/login"
};
