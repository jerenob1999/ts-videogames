import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import { axiosGenres } from "../services/genres";

const getGenres = async (_req: Request, res: Response) => {
  try {
    const genres = await axiosGenres();
    res.send(genres);
  } catch (error) {
    handleHttp(res, "ERROR_GET_GENRES", error);
  }
};

const getGenreDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const genreDetail = await axiosGenres(id);
    res.send(genreDetail);
  } catch (error) {
    handleHttp(res, "ERROR_GET_GENRE_DETAIL", error);
  }
};

export { getGenres, getGenreDetail };
