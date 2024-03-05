import { Router } from "express";
import { getUsers } from "../controller/userController";
import { updateUser } from "../controller/authController";

const router = Router();
router.route("/").get(getUsers).put(updateUser);

export default router;
