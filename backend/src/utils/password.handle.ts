import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const encryptedPassword = await hash(password, 8);
  return encryptedPassword;
};

const verified = async (password: string, hashPassword: string) => {
  const verifyPassword = await compare(password, hashPassword);
  return verifyPassword;
};

export { encrypt, verified };
