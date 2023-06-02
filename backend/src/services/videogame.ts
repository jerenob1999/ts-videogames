import axios from "axios";
import { Videogame } from "../interfaces/videogame.interface";
import "dotenv/config";

const filterAPI = (Videogames: any): Videogame => {
  return {
    id: Videogames.id,
    name: Videogames.name,
    platforms: Videogames.platforms,
    rating: Videogames.rating,
    background_image: Videogames.background_image,
    released: Videogames.released,
  };
};

const axiosVideogames = async (): Promise<Videogame[]> => {
  const API_KEY: string = `${process.env.API_KEY}`;
  const API: string = `https://api.rawg.io/api/games?key=${API_KEY}`;
  const response = await axios.get(API);
  const filteredData: Videogame[] = response.data.results.map((game: any) =>
    filterAPI(game)
  );
  return filteredData;
};

export { axiosVideogames };
