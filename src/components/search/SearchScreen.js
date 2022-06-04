import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { parse } from "qs";
import { useForm } from "../../hooks/UseForm";
import { getHeroByName } from "../../helpers/getHeroByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = parse(location.search, { ignoreQueryPrefix: true });
  const { onInputChange, formState } = useForm({
    search_hero: q,
  });
  const heroes = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${formState.search_hero}`);
  };

  return (
    <main className="py-2 px-2 md:py-4 md:px-4">
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center"
      >
        <input
          className="w-56 md:w-72 px-1 md:px-2 bg-gray-300 rounded-sm h-7 font-bold placeholder:font-bold text-gray-600 placeholder:text-gray-400"
          type="text"
          name="search_hero"
          autoComplete="off"
          placeholder="Search hero..."
          value={formState.name}
          onChange={onInputChange}
        />
        <button className="ml-2 font-bold text-pink-500 py-1 px-2 border border-solid border-pink-500 rounded-md outline-white hover:bg-pink-500 focus:bg-pink-500 hover:text-white focus:text-white transition duration-300">
          Search
        </button>
      </form>

      {!q && (
        <div className="animate-transitionflash mt-6 md:mt-10 text-center text-pink-500 font-bold text-4xl md:text-5xl">
          look for your favorite hero
        </div>
      )}

      {q.length >= 1 && heroes.length <= 0 && (
        <div className="animate-transitionflash mt-6 md:mt-10 text-center text-pink-500 font-bold text-4xl md:text-5xl">
          Hero not found (;-;)
        </div>
      )}

      {q.length >= 1 && heroes.length >= 0 && (
        <section className="animate-transitionflash mx-auto mt-7 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center w-full max-w-6xl">
          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          ))}
        </section>
      )}
    </main>
  );
};
