import { Request, Response } from "express";
import User from "../model/user";
import color from "colors";

export const signup = async (req: Request, res: Response) => {
  try {
    const { userName, email, addres, password } = req.body;
    console.log(color.green(req.body));
    // const user = User.create()
  } catch (error) {
    console.log(color.bgRed(`signup request failed ${error}`));
  }
};
