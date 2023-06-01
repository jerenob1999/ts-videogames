import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?:any) => {
  console.log(errorRaw)
  res.status(500);
  res.send({ error });
};

// const handleCreatUser = (res: Response,error:string, errorRaw?:any) => {
//   console.log(errorRaw)
//   res.status()
// }

export default handleHttp;
