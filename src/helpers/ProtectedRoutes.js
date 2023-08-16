import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const userLogin = useSelector((state) => state.auth);
  const { userInfo } = userLogin;
  const isAuthenticated = userInfo ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
