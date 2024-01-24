import mongoose from "mongoose";
import color from "colors";

const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(color.bgGreen("Database is connected"));
  } catch (error) {
    console.log(color.bgRed("Failed to connect Database"));
  }
};

export default connectDB;
