import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";

export const SearchScreen = () => {
  const {onInputChange, formState, onResetForm} = useForm({search_hero:""})
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(formState);
    navigate(`?q=${formState.search_hero}&pepe=fsfs`)
    onResetForm()
  }

  

  return (
    <main className="py-2 px-2 md:py-4 md:px-4">
      <form onSubmit={handleSearch} className="flex justify-center items-center">
        <input
          className="w-56 md:w-72 px-1 md:px-2 bg-gray-300 rounded-sm h-7 font-bold placeholder:font-bold text-gray-600 placeholder:text-gray-400"
          type="text"
          name="search_hero"
          autoComplete="off"
          placeholder="Search hero..."
          value={formState.name}
          onChange={onInputChange}
        />
        <button className="ml-2 font-bold text-pink-500 py-1 px-2 border border-solid border-pink-500 rounded-md outline-white hover:bg-pink-500 focus:bg-pink-500 hover:text-white focus:text-white transition duration-300">Search</button>
      </form>
    </main>
  );
};
