import { Router } from "express";
import { sendEmail } from "../controller/emailController";


const router = Router();
router.route("/sendmail").post(sendEmail);

export default router;
