import { Request, Response } from "express";

const orderController = (_req: Request, res: Response) => {
  try {
    res.send("USER_LOGGED");
  } catch (error) {
    res.send("ERROR_SESSION_EXPIRED");
  }
};

export { orderController };
