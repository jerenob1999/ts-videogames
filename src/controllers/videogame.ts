import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";

const getVideogame = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.send(id);
  } catch (error) {
    handleHttp(res, "ERROR_GET_VIDEOGAME");
  }
};

const getVideogames = (_req: Request, res: Response) => {
  try {
    res.send("videogames");
  } catch (error) {
    handleHttp(res, "ERROR_GET_VIDEOGAMES");
  }
};

export { getVideogame, getVideogames };
