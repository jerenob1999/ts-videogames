import React from "react";
import getGenreDetail from "../../videogame/services/genreID.services";
import Description from "./Description";
import getVideogamesByGenre from "../../videogame/services/videogameByGenre.service";
import { Videogame } from "../../videogame/model";
import { Genre } from "../model/genre.model";
import { Suspense, lazy } from "react";
const Card = lazy(() => import("../../components/Card/Card"));

type Params = {
  params: {
    genreId: string;
  };
};

async function GenreDetail({ params: { genreId } }: Params) {
  const genreDetails = await getGenreDetail(genreId);
  const genreVideogames = await getVideogamesByGenre(genreDetails.slug);
  return (
    <div>
      <p>{genreDetails.name}</p>
      <Description description={genreDetails.description} />
      {genreVideogames.results.map((game: Partial<Videogame & Genre>) => (
        <Suspense fallback={<>Loading...</>}>
          <Card data={game} route={"videogame"} />
        </Suspense>
      ))}
    </div>
  );
}

export default GenreDetail;
