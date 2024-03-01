import { Router } from "express";
import { authenticate, authorize } from "../middleware/auth";
import { createOrder } from "../controller/orderController";

const router = Router();
router.route("/new").post(authenticate, createOrder);

export default router;
