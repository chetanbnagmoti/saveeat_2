import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/auth.constants";

export const LoginUserReducer = (state = [], action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      console.log(action);
      return { loading: false, error: action.payload.message };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
