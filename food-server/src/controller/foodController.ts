import { Request, Response, NextFunction } from "express";
import color from "colors";
import Food from "../model/food";
import MyError from "../utils/myError";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(color.bgWhite(`REQUESTIIN BODY ${req.body}`));
    const food = await Food.create({ ...req.body });
    res.status(201).json({ message: "Successfully created category", food });
  } catch (error) {
    next(error);
  }
};

export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId);
    if (!food) {
      throw new MyError(`Category not found id=${foodId}`, 400);
    }
    res.status(200).json({
      message: `Successfully get category id=${foodId}`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foods = await Food.find().populate("category", "_id name");
    if (!foods) {
      throw new MyError(`foods not found`, 400);
    }
    res.status(200).json({
      message: "Successfully get Foods",
      foods,
    });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateData = req.body;
    const food = await Food.findByIdAndUpdate(foodId, updateData);
    if (!food) {
      throw new MyError(`Category not found id=${foodId}`, 400);
    }
    res.status(200).json({
      message: `Successfully updated category id=${foodId}`,
      food,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const deletedFood = await Food.findByIdAndDelete(foodId);
    if (!deletedFood) {
      throw new MyError(`Category not found id=${foodId}`, 400);
    }
    res.status(200).json({
      message: `Successfully deleted category id=${foodId}`,
    });
  } catch (error) {
    next(error);
  }
};
