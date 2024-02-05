import { Schema, SchemaType, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: [true, "Хоолны нэрийн заавал оруулна уу"],
    unique: true,
    maxLenght: [50, "50 аас бага тэмдэгт оруулна уу"],
  },
  price: {
    type: Number,
    default: 0,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  isSale: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: Schema.ObjectId,
    ref: "Category",
    required: [true, "Ангилалаа сонгоно уу"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Food = model("Food", foodSchema);
export default Food;
