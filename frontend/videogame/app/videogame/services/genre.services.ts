import { Genre } from "../../genres/model/genre.model";

const getGenres = (): Promise<Genre[]> => {
    const url = `http://localhost:3002/genre/`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.results);
  };
  
  export default getGenres;