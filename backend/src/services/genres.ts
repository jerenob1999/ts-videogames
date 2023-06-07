import axios from "axios";
import "dotenv/config";
const API_KEY: string = `${process.env.API_KEY}`;

const axiosGenres = async (id?: string) => {
  const response = id
    ? await axios.get(`https://api.rawg.io/api/genres/${id}?key=${API_KEY}`)
    : await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  return response.data;
};

export { axiosGenres };
