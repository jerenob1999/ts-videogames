import { Request, Response } from "express";

interface RequestExt extends Request{
    user?:string
}

const orderController = (req: RequestExt, res: Response) => {
  try {
    res.send({
        user:req.user
    });

  } catch (error) {
    res.send("ERROR_SESSION_EXPIRED");
  }
};

export { orderController };
