import { Router } from "express";
import { getVideogameDetail, getVideogames } from "../controllers/videogame";

const router = Router();

router.get("/", getVideogames);
router.get("/:id", getVideogameDetail);

export { router };
