import React from "react";
import getGenres from "../videogame/services/genre.services";
import Card from "../components/Card/Card";

async function Genres() {
  const genres = await getGenres();
  return (
    <>
      {genres.map((genre) => {
        return <Card data={genre} key={genre.id} />;
      })}
    </>
  );
}

export default Genres;
