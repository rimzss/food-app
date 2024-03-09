import { Request, Response, NextFunction } from "express";
import color from "colors";
import User from "../model/user";
import Basket from "../model/basket";
import MyError from "../utils/myError";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, orderInfo } = req.body;
    const user = await User.findById(userId);
    const userBasket = await Basket.findOne({ user: userId });
    user?.orders.push(orderInfo);
    userBasket?.foods.splice(0, userBasket?.foods.length);
    await user?.save();
    await userBasket?.save();
    res.status(201).json({ message: "Successfully created order" });
  } catch (error) {
    next(error);
  }
};

// export const getFood = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { foodId } = req.params;
//     const food = await Food.findById(foodId);
//     if (!food) {
//       throw new MyError(`Category not found id=${foodId}`, 400);
//     }
//     res.status(200).json({
//       message: `Successfully get category id=${foodId}`,
//       food,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const getAllFood = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const foods = await Food.find().populate("category", "_id name");
//     if (!foods) {
//       throw new MyError(`foods not found`, 400);
//     }
//     res.status(200).json({
//       message: "Successfully get Foods",
//       foods,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateFood = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { foodId } = req.params;
//     const { updateData } = req.body;
//     console.log("UPDATE DATA", req.body);
//     console.log("UPDATE id", foodId);
//     const food = await Food.findByIdAndUpdate(foodId, updateData);
//     if (!food) {
//       throw new MyError(`Category not found id=${foodId}`, 400);
//     }
//     res.status(200).json({
//       message: `Successfully updated category id=${foodId}`,
//       food,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteFood = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { foodId } = req.params;
//     const deletedFood = await Food.findByIdAndDelete(foodId);
//     if (!deletedFood) {
//       throw new MyError(`Category not found id=${foodId}`, 400);
//     }
//     res.status(200).json({
//       message: `Successfully deleted category id=${foodId}`,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
