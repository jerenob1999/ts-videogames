import { Router } from "express";
import { registerController , logginController } from "../controllers/auth";
// import { logMiddleware } from "../middleware/log";
const router = Router();
import bodyParser from 'body-parser';

router.post("/register", bodyParser.json(), registerController);
router.post("/login", bodyParser.json(), logginController);

export { router };
