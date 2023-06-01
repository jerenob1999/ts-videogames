import { Router } from "express";
import { checkJWT } from "../middleware/session";
import { orderController } from "../controllers/order";
const router = Router();

//Esta ruta solo pueden acceder las personas con sesion activa!
//Que tenga un JWT valido.

router.get("/",checkJWT,orderController)

export { router };
