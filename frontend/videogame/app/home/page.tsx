import React from "react";
import { Navbar } from "../components/NavBar";
import { Routes } from "../models";
import ButtonAppBar from "../components/NavBar/iu/NavBar.ui";


function Home() {
  return (
    <div>
      <ButtonAppBar pathNames={[Routes.VIDEOGAMES]}></ButtonAppBar>
      <h1>WELCOME TO VIDEOGAME APP</h1>
    </div>
  );
}

export default Home;
