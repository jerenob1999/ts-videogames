export const Routes = {
  VIDEOGAMES: {
    path: "/videogame",
    name: "Videogames",
  },
  HOME: {
    path: "/home",
    name: "Home",
  },
  GENRES: {
    path: "/genres",
    name: "Genres"
  }
};

export interface Route {
  path: string;
  name: string;
}
