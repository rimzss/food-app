import { NextFunction, Request, Response } from "express";
import MyError from "../utils/myError";
import jwt from "jsonwebtoken";
import { IReq } from "../utils/interface";
import User from "../model/user";

export const authenticate = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      throw new MyError("No token, Get token ASAP!!!", 400);
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new MyError("You should sign in first", 401);
    }
    const { id } = jwt.verify(token!, process.env.JWT_PRIVATE_KEY!) as {
      id: string;
    };
    const findUser = await User.findById(id);
    req.user = findUser;
    next();
  } catch (error) {
    next(error);
  }
};

export const authorize = (...roles:string[]) =>{
  return (req:IReq, res:Response, next:NextFunction)=>{
    try {
      const {user} = req
      if(!roles.includes(user.role)){
        throw new MyError("Уучлаарай таны эрх энэ үйлдлийг хийх боломжгүй байна",403)
      }
    } catch (error) {
      next(error)
    }
  }
}