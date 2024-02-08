import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/categoryController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();
router.route("/").get(getAllCategory).post(createCategory);
router
  .route("/:categoryId")
  .get(getCategory)
  .put(authenticate, authorize("Admin", "Moderator"),updateCategory)
  .delete(authenticate, authorize("Admin", "Moderator"),deleteCategory);

export default router;
