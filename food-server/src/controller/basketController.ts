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
    const findIndex = userBasket?.foods.findIndex((el) => el.food == foodId);
    if (findIndex === -1) {
      userBasket?.foods.push({ food: foodId, count: count });
    } else {
      userBasket!.foods[findIndex!].count =
        userBasket!.foods[findIndex!].count! + Number(count);
    }
    const userBasketFoods = await (
      await userBasket?.save()
    )?.populate("foods.food");
    res
      .status(200)
      .json({ message: "successfully updated basket", userBasketFoods });
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
    const userBasket = await Basket.findOne({ user: userId }).populate(
      "foods.food"
    );
    const deleteIndex = userBasket?.foods.findIndex(
      (food) => food.food?._id == foodId
    );

    userBasket?.foods.splice(deleteIndex!, 1);
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
