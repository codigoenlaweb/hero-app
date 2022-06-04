import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../components/auth/authContext";

export const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContex);
  const location = useLocation();
  const urlpath = { pathname: location.pathname, search: location.search };
  localStorage.setItem("lastLocation", JSON.stringify(urlpath));

  return user.logged ? children : <Navigate to="/login" />;
};
