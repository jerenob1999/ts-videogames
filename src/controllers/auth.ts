import { Response, Request } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerController = async (req: Request, res: Response) => {
  try {
    const response = req.body;
    const responseUser = await registerNewUser(response);
    res.send(responseUser);
  } catch (error: any) {
    console.log(req.body);
    console.log(error.message);
    res.send("error");
  }
};

const logginController = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });
    res.send(responseUser);
  } catch (error: any) {
    console.log(error.message);
  }
};

export { registerController, logginController };
