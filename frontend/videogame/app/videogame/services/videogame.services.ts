import { Videogame } from "../model";

const getVideogames = (): Promise<Videogame[]> => {
  const url = "http://localhost:3002/videogames";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};

export default getVideogames;
