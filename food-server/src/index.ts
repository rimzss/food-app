import express, { Application, Request, Response } from "express";
import color from "colors";
import mongoose from "mongoose";
import User from "./model/user";
import connectDB from "./config/db";
import { configDotenv } from "dotenv";
import authRoutes from "./router/authRoutes";
import userRoutes from "./router/userRoutes";
import emailRoutes from "./router/emailRoutes";
import cors from "cors";
configDotenv();
const app: Application = express();

const MONGO_URL = process.env.MONGO_URL as string;
const PORT = process.env.PORT;
connectDB(MONGO_URL);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/verify", emailRoutes);

// app.get("/user", async (req: Request, res: Response) => {
//   const newUser = {
//     name: "Admin",
//     email: "admin@gmail.com",
//     password: "Admin123",
//   };
//   const user = await User.create(newUser);
//   res.json({ message: "New user created" });
// });

app.listen(PORT, () => {
  console.log(color.rainbow(`Server is Running on ${PORT}`));
});
