import express from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes/index";
const PORT = process.env.PORT || 3000;
import db from "./config/mongo"

const app = express();
app.use(cors());
app.use(router);
db().then(() => console.log("conection ready"))
app.listen(PORT, () => {
  console.log(`escuchando el puerto ${PORT}`);
});


