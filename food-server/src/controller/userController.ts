import { Request, Response } from "express";
import User from "../model/user";
import color from "colors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json({ message: "All users found", users });
  } catch (error) {
    console.log(color.bgRed(`Error occured while getting all users${error}`));
    res.status(500).json({ message: "Error occured while signing up", error });
  }
};
