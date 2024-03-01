import express, { Application, Request, Response } from "express";
import color from "colors";
import mongoose from "mongoose";
import User from "./model/user";
import connectDB from "./config/db";
import { configDotenv } from "dotenv";
import authRoutes from "./router/authRoutes";
import userRoutes from "./router/userRoutes";
import emailRoutes from "./router/emailRoutes";
import catRoutes from "./router/catRoutes";
import foodRoutes from "./router/foodRoutes";
import uploadRoutes from "./router/uploadRoutes";
import basketRoutes from "./router/basketRoutes";
import orderRoutes from "./router/orderRoutes";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
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
app.use("/upload", uploadRoutes);

app.use("/category", catRoutes);
app.use("/food", foodRoutes);
app.use("/basket", basketRoutes);
app.use("/order", orderRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(color.rainbow(`Server is Running on ${PORT}`));
});
