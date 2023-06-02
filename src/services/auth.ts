import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/password.handle";

const registerNewUser = async (body: User) => {
  const { password, name, birthdate, email } = body;
  const check = await UserModel.findOne({ email });
  if (check) return "USER_ALREADY_EXIST";
  const hashPassword = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: hashPassword,
    name,
    birthdate,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const check = await UserModel.findOne({ email });
  if (!check) return "USER_NOT_FOUND";
  const encryptedPassword = check.password;
  const verifyPassword = await verified(password, encryptedPassword);
  if (!verifyPassword) return "INCORRECT_PASSWORD";
  return verifyPassword;
};

export { registerNewUser, loginUser };
