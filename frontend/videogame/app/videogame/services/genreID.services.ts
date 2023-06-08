import { GenreDetail } from "../../genres/model/genre.model";

const getGenreDetail = (id:string): Promise<GenreDetail> => {
    const url = `http://localhost:3002/genre/${id}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  };
  
  export default getGenreDetail;