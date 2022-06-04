import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, alter_ego, characters }) => {
  const imagePath = `assets/${id}.jpg`;
  const urlPath = `/hero/${id}`;

  return (
    <article
      className="overflow-x-hidden overflow-y-hidden group mx-auto mb-4 md:mb-7 w-72 md:w-60 lg:w-56 border-solid border border-gray-500 bg-gray-200 rounded shadow-md hover:shadow-2xl hover:bg-white font-bold hover:scale-105 transition duration-150 ease-linear"
    >
      <img src={imagePath} alt={superhero} />
      <div className="pt-3 pb-1 px-2">
        <h4 className="group-hover:animate-transitionInLeft">{superhero}</h4>
        <p className="group-hover:animate-transitionInRight">{alter_ego}</p>
        {alter_ego !== characters && (
          <p className="group-hover:animate-transitionInTop">{characters}</p>
        )}
        <Link to={urlPath} className="font-normal text-pink-600">
          Mas...
        </Link>
      </div>
    </article>
  );
};
