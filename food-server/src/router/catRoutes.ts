import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/categoryController";
import { authenticate } from "../middleware/auth";

const router = Router();
router.route("/").get(authenticate, getAllCategory).post(createCategory);
router
  .route("/:categoryId")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
