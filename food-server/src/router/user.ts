import { Router } from "express";
import { signup } from "../controller/user";
const router = Router();
router.route("/signup").post(signup);
