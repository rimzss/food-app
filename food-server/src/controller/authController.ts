import { Request, Response, NextFunction } from "express";
import User from "../model/user";
import color from "colors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import MyError from "../utils/myError";

configDotenv();

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let newUser = req.body;
    const user = await User.create(newUser);
    res
      .status(201)
      .json({ message: "New user successfully created", userInfo: user });
  } catch (error) {
    console.log(color.bgRed(`signup request failed ${error}`));
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { email, upassword } = req.body;
    const user = await User.findOne({ email })
      .select("+password")
      .lean()
      .populate("orders.foods.food");

    if (!user) {
      throw new MyError(`${email} -хэрэглэгч бүртгэлгүй байна.`, 400);
    }
    const isValid = await bcrypt.compare(upassword, user.password);
    if (!isValid) {
      throw new MyError(`Имэйл эсвэл нууц үг буруу байнав`, 400);
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
    const { password, ...userInfo } = user;

    res.status(201).json({ message: "Амжилттай нэвтэрлээ", token, userInfo });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, updateInfo } = req.body;
    console.log(color.bgBlue(`Req body ${updateInfo}`));
    const user = await User.findById(userId);
    console.log(color.bgBlue(`Found user ${user}`));
    if (!user) {
      throw new MyError("Хэрэглэгч бүртгэлгүй байна", 400);
    } else {
      await user.updateOne(updateInfo);
    }
    res.status(201).json({ message: "Амжилттай засагдлаа" });
  } catch (error) {
    next();
  }
};
