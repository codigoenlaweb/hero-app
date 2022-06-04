import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../auth/authContext";
import { types } from "../types/types";

export const Logout = () => {
  const { user, dispatch } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };
    
    dispatch(action);

    navigate("/login", { replace: true });
  };

  return (
    <div className="flex flex-wrap">
      <p className="hidden md:block text-white text-xl font-bold mr-4">{user.name}</p>
      <button
        onClick={handleLogout}
        className="hover:text-white focus:text-white md:text-lg text-gray-400 font-bold"
      >
        Logout
      </button>
    </div>
  );
};
