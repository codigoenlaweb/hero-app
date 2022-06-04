import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "../login/Logout";
import "animate.css";
import { AuthContex } from "../auth/authContext";


export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const {user} = useContext(AuthContex); 

  useEffect(() => {
    if (isActive) {
      // remover
      document
        .querySelector("#menu-mobile")
        .classList.remove("hidden", "animate__animated", "animate__backOutUp");
      document
        .querySelector("#menu-mobile")
        .classList.add("flex", "animate__animated", "animate__backInDown");

      document.querySelector("#menu-hamburger").classList.add("opacity-0");

      setTimeout(() => {
        document.querySelector("#menu-hamburger").classList.add("hidden");
        document
          .querySelector("#menu-x")
          .classList.remove("hidden", "opacity-0");
        document.querySelector("#menu-x").classList.add("block");
      }, 300);
    } else {
      // remove
      document
        .querySelector("#menu-mobile")
        .classList.remove("flex", "animate__animated", "animate__backInDown");

      setTimeout(() => {
        document
          .querySelector("#menu-mobile")
          .classList.add("flex", "animate__animated", "animate__backOutUp");
      }, 0);

      setTimeout(() => {
        document.querySelector("#menu-mobile").classList.add("hidden");
      }, 300);

      document.querySelector("#menu-x").classList.add("opacity-0");

      setTimeout(() => {
        document.querySelector("#menu-x").classList.add("hidden");
        document
          .querySelector("#menu-hamburger")
          .classList.remove("hidden", "opacity-0");
        document.querySelector("#menu-x").classList.add("block");
      }, 300);
    }
  }, [isActive]);

  const closeMenu = (e) => {
    if (e.target.id === "link") {
      setIsActive(false);
    } else if (e.target.id === "whindow-menu") {
      setIsActive(false);
    }
  };

  return (
    <Fragment>
      {/* mobile */}
      {isActive && (
        <div
          onClick={closeMenu}
          id="whindow-menu"
          className="w-full h-full fixed"
        ></div>
      )}
      <header className="animate__animated animate__fadeInLeft px-2 py-2 md:px-4 md:py-3 flex md:hidden flex-wrap justify-between items-center bg-neutral-800">
        <nav className={`w-full md:w-auto md:text-lg flex flex-row flex-wrap justify-between md:justify-start items-center`}>
          <Link to="/" className="text-white font-bold text-2xl">
            Heroes App
          </Link>
          <ul
            onClick={closeMenu}
            id="menu-mobile"
            className="hidden flex-col max-w-xs bg-neutral-800 px-10 py-6 rounded-bl-md absolute right-0 top-14 z-50"
          >
            <li className=" text-white text-lg font-bold">{user.name}</li>
            <li className="text-gray-400 font-bold">
              <NavLink
                id="link"
                to="/marvel"
                className={({ isActive }) =>
                  isActive
                    ? " text-pink-500"
                    : "hover:text-white focus:text-white"
                }
              >
                Marvel
              </NavLink>
            </li>
            <li className="text-gray-400 font-bold">
              <NavLink
                id="link"
                to="/dc"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500"
                    : "hover:text-white focus:text-white"
                }
              >
                DC
              </NavLink>
            </li>
            <li className="text-gray-400 font-bold">
              <NavLink
                id="link"
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500"
                    : "hover:text-white focus:text-white"
                }
              >
                Search
              </NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <svg
              id="menu-hamburger"
              className=" transition ease-linear duration-300"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
            >
              <path d="M5 30V27.208H35V30ZM5 21.375V18.625H35V21.375ZM5 12.792V10H35V12.792Z" />
            </svg>

            <svg
              id="menu-x"
              className=" transition ease-linear duration-300"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
            >
              <path d="M10.458 31.458 8.542 29.542 18.042 20 8.542 10.458 10.458 8.542 20 18.042 29.542 8.542 31.458 10.458 21.958 20 31.458 29.542 29.542 31.458 20 21.958Z" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Desktop */}
      <header className="animate__animated animate__fadeInLeft px-4 py-3 hidden md:flex flex-wrap justify-between items-center bg-neutral-800">
        <nav className="w-auto flex flex-row flex-wrap justify-start items-center text-lg">
          <Link to="/" className="text-white font-bold text-3xl">
            Heroes App
          </Link>
          <ul className="ml-6 mt-1 flex justify-between w-40 text-base">
            <li className="text-gray-400 font-bold">
              <NavLink
                to="/marvel"
                className={({ isActive }) =>
                  isActive
                    ? " text-pink-500"
                    : "hover:text-white focus:text-white"
                }
              >
                Marvel
              </NavLink>
            </li>
            <li className="text-gray-400 font-bold">
              <NavLink
                to="/dc"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500"
                    : "hover:text-white focus:text-white"
                }
              >
                DC
              </NavLink>
            </li>
            <li className="text-gray-400 font-bold">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500"
                    : "hover:text-white focus:text-white"
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
        <li className="text-gray-400 hidden md:block">
          <Logout />
        </li>
      </header>
    </Fragment>
  );
};
