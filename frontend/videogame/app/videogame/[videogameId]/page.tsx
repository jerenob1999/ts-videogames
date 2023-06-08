import React from 'react'
import  getVideogameID  from '../services/videogameID.services'
import Card from '../../components/Card/Card'



type Params = {
    params: {
        videogameId:string
    }
}

const fetchVideogamesId = async (id:string) => {
  return await getVideogameID(id);
};

export default async function page({params: {videogameId}}: Params ) {
  const Detail = await fetchVideogamesId(videogameId)
  console.log(Detail)
  return (
   <Card
   data={Detail}
   />
  )
}
