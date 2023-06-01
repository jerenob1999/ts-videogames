import "dotenv/config";
import { connect } from "mongoose";

dbVideogames().catch((err) => console.log(err));

async function dbVideogames(): Promise<void> {
  const DB_URI = <string>process.env.DT_URI;
  await connect(DB_URI);
}

export default dbVideogames;
