import { Request, Response, NextFunction } from "express";
import Basket from "../model/basket";

export const createBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body;
    const basket = {
      user: userId,
      foods: [],
    };
    const data = await Basket.create(basket);
    res.status(200).json({ message: "successfully created basket" });
  } catch (error) {
    next(error);
  }
};
export const addFoodToBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, foodId, count } = req.body;
    const userBasket = await Basket.findOne({ user: userId });
    userBasket?.foods.push({ food: foodId, count: count });
    await userBasket?.save();
    res
      .status(200)
      .json({ message: "successfully updated basket", userBasket });
  } catch (error) {
    next(error);
  }
};
export const deleteFoodFromBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, foodId } = req.body;
    const userBasket = await Basket.findOne({ user: userId });
    const deleteIndex = userBasket?.foods.findIndex(
      (food) => food.food === foodId
    );
    userBasket?.foods.splice(deleteIndex!, 1);
    console.log("USERBASKET", userBasket);
    await userBasket?.save();
    res.status(200).json({ message: "successfully deleted from basket" });
  } catch (error) {
    next(error);
  }
};

export const getBasketFoods = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const basket = await Basket.findOne({ user: userId }).populate(
      "foods.food"
    );
    res.status(200).json({ message: "successfully get baskets", basket });
  } catch (error) {
    next(error);
  }
};