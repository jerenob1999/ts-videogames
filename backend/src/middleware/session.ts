import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || null;
    const jwt = jwtUser?.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);
    console.log(isUser)
    if (!isUser) {
      res.status(401);
      res.send("JWT_INVALID");
    } else {
        req.user = isUser
      console.log({ isUser });
      next();
    }
  } catch (error) {
    console.log({ error });
    res.status(400);
    res.send("SESSION_NOT_VALID");
  }
};

export { checkJWT };
