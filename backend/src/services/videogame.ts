import axios from "axios";
import { Videogame } from "../interfaces/videogame.interface";
import "dotenv/config";
const API_KEY: string = `${process.env.API_KEY}`;
const API: string = `https://api.rawg.io/api/games?key=${API_KEY}`;

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

const axiosVideogameDetail = async (id: string) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );
  return response.data;
};

const axiosVideogames = async (
  next: Boolean = false,
  URL: string = API
): Promise<any> => {
  const response = await axios.get(URL);
  if (next) return axiosVideogames(false, response.data.next);
  const filteredData: Videogame[] = response.data.results.map((game: any) =>
    filterAPI(game)
  );
  response.data.results = filteredData;
  return response.data;
};

export { axiosVideogames, axiosVideogameDetail };
