import Image from "next/image";
import { Videogame } from "../../videogame/model";
import { Genre } from "../../genres/model/genre.model";
import Link from "next/link";
import "./Card.css";

type CardData = Partial<Videogame & Genre>;
interface Props {
  data: CardData;
}

function VideogameCard({ data }: Props) {
  const renderImage = (src: string) => (
    <Image
      width="400"
      height="250"
      alt={data.name ?? ""}
      src={src}
      priority
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      placeholder="blur"
      blurDataURL={src}
    />
  );

  const cardLink = (href: string) => {
  }
  return (
    <Link href={`/videogame/${data.id}`}>
      <div className="Card">
        <p>Name: {data.name} </p>
        <p>Rating: {data.rating} </p>
        <p>Release Date: {data.released}</p>
        {!!data.background_image && renderImage(data.background_image)}
        {!!data.image_background && renderImage(data.image_background)}
      </div>
    </Link>
  );
}

export default VideogameCard;
