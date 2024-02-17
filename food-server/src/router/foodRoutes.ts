import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controller/foodController";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();
router.route("/").get(getAllFood).post(createFood);
router.route("/:foodId").get(getFood).put(updateFood).delete(authenticate, authorize("Admin"), deleteFood);

export default router;
