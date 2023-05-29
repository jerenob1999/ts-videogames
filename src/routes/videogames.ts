import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send({ data: "HERE ARE MY VIDEOGAMES ROUTE" });
});

export { router };