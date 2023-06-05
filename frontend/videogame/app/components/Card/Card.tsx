"use client";

import Image from "next/image";
import { Videogame } from "../../videogame/model";
import Link from "next/link";
import "./Card.css";
interface Props {
  data: Videogame;
}
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function VideogameCard({ data }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={data.name}
        height="250"
        width="150"
        image={data.background_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.released}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/videogame/${data.id}`}>
          <Button variant="contained" size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default VideogameCard;

// function VideogameCard({ data }: Props) {
//   return <div className="Card">
//     <Link href={`/videogame/${data.id}`}>
//     <p>Name: {data.name} </p>
//     <p>Rating: {data.rating} </p>
//     <p>Release Date: {data.released}</p>
//     <Image width="400" height="250" alt={data.name} src={data.background_image}/>
//     </Link>
//   </div>;
// }
