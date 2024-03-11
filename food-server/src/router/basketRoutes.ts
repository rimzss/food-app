import { Router } from "express";
import {
  addFoodToBasket,
  createBasket,
  deleteFoodFromBasket,
  getBasketFoods,
  updateCounter,
} from "../controller/basketController";

const router = Router();
router
  .route("/")
  .post(createBasket)
  .put(addFoodToBasket)
  .delete(deleteFoodFromBasket);
router.route("/:userId").get(getBasketFoods).put(updateCounter);
export default router;
