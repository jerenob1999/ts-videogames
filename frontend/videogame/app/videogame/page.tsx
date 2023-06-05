import getVideogames from "./services/videogame.services";
import Card from "../components/Card/Card";
import { Navbar } from "../components/NavBar";
import { Routes } from "../models";
import ButtonAppBar from "../components/NavBar/iu/NavBar.ui";

const fetchVideogames = async () => {
  return await getVideogames();
};

async function Videogames() {
  const videogames = await fetchVideogames();
  return (
    <>
      <ButtonAppBar pathNames={[Routes.HOME]}></ButtonAppBar>
      {videogames.map((videogame) => {
        return <Card key={videogame.id} data={videogame} />;
      })}{" "}
    </>
  );
}

export default Videogames;
