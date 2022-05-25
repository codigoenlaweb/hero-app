import React from "react";
import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <main className="px-2 md:px-4">
      <HeroList publisher="Marvel Comics" />
    </main>
  );
};
