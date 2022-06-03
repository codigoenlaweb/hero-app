import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";
import 'animate.css';
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <section className="animate__animated animate__fadeIn animate__fast mx-auto mt-7 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center w-full max-w-6xl">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </section>
  );
};
