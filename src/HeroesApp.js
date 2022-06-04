import React, { Fragment, useEffect, useReducer } from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContex } from "./components/auth/authContext";
import { authReducer } from "./components/auth/authReducer";

const initialState = () => {
  return JSON.parse(localStorage.getItem('userHeroes')) || {logged: false};
}

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, initialState)

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('userHeroes', JSON.stringify(user));
  }, [user])

  return (
    <Fragment>
      <AuthContex.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContex.Provider>
    </Fragment>
  );
};
