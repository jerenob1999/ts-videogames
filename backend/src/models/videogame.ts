import { Schema, model } from "mongoose";
import { Videogame } from "../interfaces/videogame.interface";

const VideogameSchema = new Schema<Videogame>({
  id: {
    types: Number,
  },
  name: {
    types: String,
  },
  released: {
    types: Date,
  },
  background_image: {
    types: String,
  },
  rating: {
    types: Number,
  },
});

const VideogameModel = model("videogame", VideogameSchema);
export { VideogameModel };
