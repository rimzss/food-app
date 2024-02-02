import { Request, Response, NextFunction } from "express";
import User from "../model/user";
import color from "colors";
import Category from "../model/category";
import MyError from "../utils/myError";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(color.bgWhite(`REQUESTIIN BODY ${req.body}`));
    await Category.create({ ...req.body });
    res.status(201).json({ message: "Successfully created category" });
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new MyError(`Category not found id=${categoryId}`, 400);
    }
    res.status(200).json({
      message: `Successfully get category id=${categoryId}`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categorys = await Category.find();
    if (!categorys) {
      throw new MyError(`Categorys not found`, 400);
    }
    res.status(200).json({
      message: "Successfully get categorys",
      categorys,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const updateData = req.body;
    const category = await Category.findByIdAndUpdate(categoryId, updateData);
    if (!category) {
      throw new MyError(`Category not found id=${categoryId}`, 400);
    }
    res.status(200).json({
      message: `Successfully updated category id=${categoryId}`,
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryId } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      throw new MyError(`Category not found id=${categoryId}`, 400);
    }
    res.status(200).json({
      message: `Successfully deleted category id=${categoryId}`,
    });
  } catch (error) {
    next(error);
  }
};
