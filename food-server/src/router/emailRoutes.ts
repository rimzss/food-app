import { Router } from "express";
import {
  changePassword,
  checkOtp,
  sendEmailUser,
} from "../controller/emailController";

const router = Router();
router.route("/sendmail").post(sendEmailUser);
router.route("/otp").post(checkOtp);
router.route("/reset").put(changePassword);

export default router;
