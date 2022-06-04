import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../components/auth/authContext";

export const PublicRoutes = ({children}) => {
  const { user } = useContext(AuthContex);
  return user.logged ? <Navigate to="/marvel" /> : children;
};
