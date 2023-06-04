import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import "dotenv/config";
import { axiosVideogames, axiosVideogameDetail } from "../services";

const getVideogameDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const videogameDetail = await axiosVideogameDetail(id);
    res.send(videogameDetail);
  } catch (error) {
    handleHttp(res, "ERROR_GET_VIDEOGAME", error);
  }
};

const getVideogames = async (_req: Request, res: Response) => {
  try {
    const response = await axiosVideogames();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_VIDEOGAME", error);
  }
};

export { getVideogameDetail, getVideogames };
