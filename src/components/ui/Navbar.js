import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "../login/Logout";

export const Navbar = () => {
  return (
    <header className="px-2 py-2 md:px-4 md:py-3 bg-neutral-800 flex flex-wrap justify-between items-center">
      <nav className=" w-full md:w-auto md:text-lg flex flex-row flex-wrap justify-between md:justify-start items-center">
        <Link to="/" className="text-white font-bold text-2xl md:text-3xl">
          Heroes App
        </Link>
        <ul className="md:ml-6 mt-1 flex justify-between w-36 md:w-24">
          <li className="text-gray-400 font-bold">
            <NavLink
              to="/marvel"
              className={({ isActive }) =>
                isActive ? " text-pink-500" : "hover:text-white focus:text-white"
              }
            >
              Marvel
            </NavLink>
          </li>
          <li className="text-gray-400 font-bold">
            <NavLink
              to="/dc"
              className={({ isActive }) =>
                isActive ? "text-pink-500" : "hover:text-white focus:text-white"
              }
            >
              DC
            </NavLink>
          </li>
          <li className="md:hidden">
            <Logout />
          </li>
        </ul>
      </nav>
      <li className="text-gray-400 font-bold hidden md:block">
        <Logout />
      </li>
    </header>
  );
};
