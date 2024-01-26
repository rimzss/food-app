import { Request, Response } from "express";
import User from "../model/user";
import color from "colors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

export const signup = async (req: Request, res: Response) => {
  try {
    let newUser = req.body;
    const user = await User.create(newUser);
    res.status(201).json({ message: "New user successfully created" });
  } catch (error) {
    console.log(color.bgRed(`signup request failed ${error}`));
    res.status(500).json({ message: "Error occured while signing up", error });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(400)
        .json({ message: `${email} -хэрэглэгч бүртгэлгүй байна` });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res
        .status(400)
        .json({ message: `Имэйл эсвэл нууц үг буруу байнав` });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.status(201).json({ message: "Амжилттай нэвтэрлээ", token });
  } catch (error) {
    console.log(color.bgRed(`signup request failed ${error}`));
    res.status(500).json({ message: "Error occured while signing in", error });
  }
};
