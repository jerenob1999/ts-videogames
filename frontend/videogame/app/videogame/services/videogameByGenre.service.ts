
const getVideogamesByGenre = (slug:string): Promise<any> => {
    const url = `http://localhost:3002/genre/query?genres=${slug}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  };
  
  export default getVideogamesByGenre;