interface Platform {
    id:string,
    name:string
}


export interface Videogame {
    id:string,
    name:string,
    platforms: Platform[],
    rating:number,
    background_image: string,
    released:Date
}