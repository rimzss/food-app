import { Request, Response } from "express";
import color from "colors";
import nodemailer from "nodemailer"
import { configDotenv } from "dotenv";
configDotenv();

const transporter = nodemailer.createTransport({
    service:process.env.EMAIL_SERVICE,
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

const mailHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>
    <style>
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        .container{
            width: 100%;
        }
    </style>
</head>
<body>
    <main class="container">
        <img src="https://s8566740.sendpul.se/ti/8566740/475586/987abae3c29df10d2785a1caeef84b668566740/Screenshot_2024-01-28_220933.png" alt="">
        <h1 >Pinecone Food Delivery</h1>
        <h2>Reset your account password</h2>
        <h3>verification code: 123456</h3>
    </main>
</body>
</html>`


export const sendEmail = async (req: Request, res: Response)=>{
    const {userMail} = req.body
    try {
        const info = await transporter.sendMail({
        from: '"Pinecone Food Delivery" <rimz1009@gmail.com>',
        to: userMail,
        subject: "Reset password", 
        text: "Hello world?",
        html: mailHTML,
    })
    console.log(color.bgBlue(`Email has been sent to ${userMail}`))
    res.status(201).json({ message: "Email sent",});
    } catch (error) {
        console.log("ERROR WHILE EMAIL SENDING", error)
        res.status(500).json({message:"ERROR WHILE EMAIL SENDING", error})
    }
    
    
}