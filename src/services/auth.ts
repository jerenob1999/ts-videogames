import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const registerNewUser = async (body: User) => {
  const {password,name,birthdate,email} = body
  const check = await UserModel.findOne({email});
  if (check) return "USER_ALREADY_EXIST"
    const registerNewUser = await UserModel.create({
        email,
        password,
        name,
        birthdate,
    })
  return registerNewUser;
};

const loginUser = async () => {};

export { registerNewUser, loginUser };
