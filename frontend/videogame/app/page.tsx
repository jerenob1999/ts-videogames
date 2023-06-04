import React from "react";
import { Navbar } from "./components/NavBar";
import { Routes } from "./models";


function page() {
  return <div>
    <h1> WELCOME TO MY VIDEOGAME APP</h1>
    <Navbar pathNames={[Routes.HOME]}></Navbar>
  </div>;
}

export default page;
