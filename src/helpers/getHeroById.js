import { heroes } from "../data/heroes";

export const getHeroById = (id = '') => {

  const heroesData = heroes.find((hero) => hero.id === id);

  if (heroesData === undefined) {
    return {heroeError:'404 not fond'}
  }else{
    return heroesData
  }
};
