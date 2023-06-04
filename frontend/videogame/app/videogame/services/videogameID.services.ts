const getVideogameID = (id: string): Promise<any> => {
  const url = `http://localhost:3002/videogames/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export default getVideogameID;
