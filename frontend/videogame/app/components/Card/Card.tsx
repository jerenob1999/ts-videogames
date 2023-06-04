import Image from "next/image";
import { Videogame } from "../../videogame/model";
import Link from "next/link";
import "./Card.css"
interface Props {
  data: Videogame;
}

function Card({ data }: Props) {
  return <div className="Card">
    <Link href={`/videogame/${data.id}`}>
    <p>Name: {data.name} </p>
    <p>Rating: {data.rating} </p>
    <p>Release Date: {data.released}</p>
    <Image width="400" height="250" alt={data.name} src={data.background_image}/>
    </Link>
  </div>;
}

export default Card;
