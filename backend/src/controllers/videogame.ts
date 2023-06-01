import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import "dotenv/config"
import axios from "axios";


const API: string = "https://api.rawg.io/api/games?key="

const getVideogame = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.send(id);
  } catch (error) {
    handleHttp(res, "ERROR_GET_VIDEOGAME");
  }
};

const getVideogames = async (_req: Request, res: Response) => {
  try {
     const response = (await axios.get(`${API}${process.env.API_KEY}`)).data;
     res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_VIDEOGAME", error);
  }
};

export { getVideogame, getVideogames };
