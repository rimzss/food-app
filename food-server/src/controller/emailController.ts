import { Request, Response } from "express";
import color from "colors";
import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
import User from "../model/user";
import bcrypt from "bcrypt";
configDotenv();
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailHTML = (otp: String) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mail</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
        }
        .container {
          width: 80%;
          
        }
        .code {
          padding: 10px;
          background-color: greenyellow;
          border-radius: 30px;
        }
        .code-box {
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <main class="container">
        <img
          src="https://s8566740.sendpul.se/ti/8566740/475586/987abae3c29df10d2785a1caeef84b668566740/Screenshot_2024-01-28_220933.png"
          alt=""
        />
        <h1>Pinecone Food Delivery</h1>
        <h2>Reset your account password</h2>
        <div class="code-box">
          <h3>verification code: <span class="code"> ${otp}</span></h3>
        </div>
      </main>
    </body>
  </html>
  `;
};

export const sendEmailUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(color.bgWhite("SEND EMAIL USER FUNCTION WORKING"));
  try {
    const otp = Math.round(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(401).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    findUser.otp = await bcrypt.hash(otp, 10);
    await findUser.save();
    console.log(color.bgWhite(`USER OTP SAVED ${otp}`));
    sendEmail(email, otp);
    res.status(200).json({ message: "Email has been sent" });
  } catch (error) {
    res.status(500).json({ message: "Email илгээх үед алдаа гарлаа.", error });
  }
};
const sendEmail = async (email: string, otp: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"Pinecone Food Delivery" <rimz1009@gmail.com>',
      to: email,
      subject: "Reset password",
      text: "Hello world?",
      html: mailHTML(otp),
    });
    console.log(color.bgBlue(`Email has been sent to ${email}`));
  } catch (error) {
    console.log("ERROR WHILE EMAIL SENDING", error);
  }
};

export const checkOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    const verifiedOtp = await bcrypt.compare(otp, findUser?.otp);
    if (!verifiedOtp) {
      return res.status(400).json({ message: "Код буруу байна" });
    }
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    res.status(500).json({ message: "Email илгээх үед алдаа гарлаа.", error });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    findUser!.password = await bcrypt.hash(password, 10);
    console.log(color.bgBlue(`HASHED PASSWORD ${findUser?.password}`));
    await findUser?.save();
    res.status(200).json({ message: "Password has been changed succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Change password function error", error });
  }
};
