import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";

const getGenres = (_req:Request, res: Response) => {
    try {
        res.send("ESTOY EN GENRES")
    } catch (error) {
        handleHttp(res, "ERROR_GET_GENRES")
    }
}



export { getGenres }