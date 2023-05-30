import "dotenv/config";
import { connect } from "mongoose";

const NODE_ENV = process.env.NODE_ENV;

dbVideogames().catch((err) => console.log(err));

async function dbVideogames(): Promise<void> {
  const DB_URI = <string>NODE_ENV;
  await connect(DB_URI);
}

export default dbVideogames;
