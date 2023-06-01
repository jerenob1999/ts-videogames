import {sign, verify} from "jsonwebtoken"
import "dotenv/config";
const JWT = process.env.JWT_SECRET!

const generateToken = (id:string) => {
    const jwt =  sign({id}, JWT, {
        expiresIn:"1h"
    })
    return jwt;
}

const verifyToken = (jwt:string) => {
    const verifyJWT = verify(jwt, JWT)
    return verifyJWT
}

export {generateToken, verifyToken}