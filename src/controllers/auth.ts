import { Response, Request } from "express";
import { registerNewUser } from "../services/auth";

const registerController = async (req: Request, res: Response) => {
    try {
        const response = req.body
        const responseUser = await registerNewUser(response);
        res.send(responseUser)       
    } catch (error:any) {
        console.log(req.body)
        console.log(error.message)
        res.send("error")
    }
};

const logginController = async (_req: Request, _res: Response) => {};

export { registerController, logginController };
