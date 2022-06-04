import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {
  //  Param of url
  const { heroId } = useParams();

  //  Get hero by id
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  // Image path
  const imgPath = `/assets/${hero.id}.jpg`;

  // Handle Go back
  const naviagate = useNavigate()
  const handleGoback = () => {
    naviagate(-1)
  }

  return (
    <main className="px-2 md:px-4 py-2 md:py-4 flex items-center">
      <section className={`${!hero.heroeError && "hidden"} animate-transitionflash w-full text-center flex flex-col justify-center items-center h-screen`}>
        <h2 className=" font-bold text-4xl md:text-6xl text-pink-500">Hero not found (;-;)</h2>
        <button onClick={handleGoback} className="mt-5 font-bold text-pink-500 py-1 px-2 border border-solid border-pink-500 rounded-md outline-white hover:bg-pink-500 focus:bg-pink-500 hover:text-white focus:text-white transition duration-300">
            Go back
        </button>
      </section>
      <section
        className={`${
          !hero.id && "hidden"
        } w-full mx-auto mt-2 md:mt-4 max-w-6xl flex flex-col md:flex-row overflow-x-hidden`}
      >
        <img
          src={imgPath}
          alt={hero.superhero}
          className="w-full md:w-2/5 lg:w-1/4 mx-auto rounded-md max-w-sm max-h-screen shadow-md animate-transitionInLeft"
        />
        <article className="md:w-3/5 lg:w-3/4 md:pl-6 animate__animated animate-transitionInRight animate__fast">
          <h3 className="mt-4 text-2xl md:text-2xl font-bold">
            {hero.superhero}
          </h3>
          <ul className="px-2 mt-2">
            <li className="border-b border-solid border-gray-300">
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className="mt-1 border-b border-solid border-gray-300">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="mt-1">
              <b>First Aparence:</b> {hero.first_appearance}
            </li>
          </ul>
          <h4 className="font-bold text-lg mt-2">Characters</h4>
          <p>{hero.characters}</p>

          <button onClick={handleGoback} className="mt-4 font-bold text-pink-500 py-1 px-2 border border-solid border-pink-500 rounded-md outline-white hover:bg-pink-500 focus:bg-pink-500 hover:text-white focus:text-white transition duration-300">
            Go back
          </button>
        </article>
      </section>
    </main>
  );
};
