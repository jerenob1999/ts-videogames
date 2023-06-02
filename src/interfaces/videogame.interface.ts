interface Platform {
    id:string,
    name:string
}

interface Genre {
    id:string,
    name:string
}


export interface Videogame {
    id:string,
    name:string,
    platforms: Platform[],
    genre: Genre[],
    rating:number,
    background_image: string,
    released:Date
}