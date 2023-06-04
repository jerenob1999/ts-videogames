export const Routes = {
  VIDEOGAMES: {
    path: "/videogame",
    name: "Videogames",
  },
  HOME: {
    path: "/home",
    name: "Home",
  },
};

export interface Route {
  path: string;
  name: string;
}
