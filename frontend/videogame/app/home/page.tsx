import React from "react";
import { Navbar } from "../components/NavBar";
import { Routes } from "../models";

function Home() {
  return (
    <div>
      <h1>WELCOME TO VIDEOGAME APP</h1>
      <Navbar pathNames={[Routes.VIDEOGAMES]} />
    </div>
  );
}

export default Home;
