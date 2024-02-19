import { Request, Response, NextFunction } from "express";
import Basket from "../model/basket";

export const createBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, foodId } = req.body;
    const data = await Basket.create();
    res.status(200).json({ message: "successfully created basket" });
  } catch (error) {
    next(error);
  }
};
