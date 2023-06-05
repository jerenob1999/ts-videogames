import React from "react";
import { Navbar } from "./components/NavBar";
import { Routes } from "./models";
import ButtonAppBar from "./components/NavBar/iu/NavBar.ui";


function page() {
  return <div>
    <ButtonAppBar pathNames={[Routes.HOME]}></ButtonAppBar>
    <h1> WELCOME TO MY VIDEOGAME APP</h1>
  </div>;
}

export default page;
