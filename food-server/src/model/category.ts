import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, ""],
    unique: true,
    maxlenght: [50, ""],
  },
  description: {
    type: String,
    required: [true, ""],
  },
  image: {
    type: String,
    default: "no category image",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model("Category", categorySchema);
export default Category;
