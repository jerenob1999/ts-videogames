import { Router } from "express";
import { getVideogames } from "../controllers/videogame";

const router = Router();

router.get("/", getVideogames);

export { router };