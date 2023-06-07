import { Router } from "express";
import { getGenres, getGenreDetail } from "../controllers/genres";

const router = Router();

router.get("/", getGenres);
router.get("/:id", getGenreDetail)

export { router };
