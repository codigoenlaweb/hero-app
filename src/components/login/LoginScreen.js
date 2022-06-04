import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { AuthContex } from "../auth/authContext";
import { types } from "../types/types";

export const LoginScreen = () => {
  const [errorUser, setErrorUser] = useState(false);
  // router dom
  const navigate = useNavigate();
  // context
  const { dispatch } = useContext(AuthContex);

  // use form hook to handle form state
  const { onInputChange, formState } = useForm({
    username: "",
  });

  // event login
  const handleLogin = (e) => {
    e.preventDefault();
    if (formState.username.length >= 3) {
      errorUser && setErrorUser(false);
      const action = {
        type: types.login,
        payload: {
          name: formState.username,
        },
      };

      dispatch(action);

      const lastPath = JSON.parse(localStorage.getItem("lastLocation")) || {
        pathname: "/marvel",
        search: "",
      };
      lastPath.search === ""
        ? navigate(lastPath.pathname)
        : navigate(`${lastPath.pathname}${lastPath.search}`);
    } else {
      setErrorUser(true);
    }
  };

  return (
    <main>
      <section className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-pink-500">
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="mt-6 flex flex-col justify-center items-center"
        >
          {errorUser && (
            <p className="animate__animated animate__headShake mb-2 text-red-500 text-center">
              username must be at least 3 characters
            </p>
          )}

          <input
            className="w-56 md:w-72 px-1 md:px-2 bg-gray-300 rounded-sm h-7 font-bold placeholder:font-bold text-gray-600 placeholder:text-gray-400"
            type="text"
            name="username"
            autoComplete="off"
            placeholder="username..."
            value={formState.name}
            onChange={onInputChange}
          />
          <button className="mt-2 font-bold text-pink-500 py-1 px-2 border border-solid border-pink-500 rounded-md outline-white hover:bg-pink-500 focus:bg-pink-500 hover:text-white focus:text-white transition duration-300">
            Login
          </button>

          <p className="mt-4 text-center font-medium text-gray-400">
            You do not need to register to use this page
          </p>
        </form>
      </section>
    </main>
  );
};
