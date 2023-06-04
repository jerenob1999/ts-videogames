import getVideogames from "./services/videogame.services";
import Card from "../components/Card/Card";
import { Navbar } from "../components/NavBar";
import { Routes } from "../models";

const fetchVideogames = async () => {
  return await getVideogames();
};

async function Videogames() {
  const videogames = await fetchVideogames();
  return (
    <>
      <Navbar pathNames={[Routes.HOME]} />
      {videogames.map((videogame) => {
        return <Card key={videogame.id} data={videogame} />;
      })}{" "}
    </>
  );
}

export default Videogames;
