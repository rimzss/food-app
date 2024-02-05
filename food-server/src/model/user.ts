import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Нэрээ заавал оруулна уу"],
  },
  email: {
    type: String,
    required: [true, "Имэйл хаягаа заавал оруулна уу"],
    unique: [true, "Имэйл бүртгэгдсэн байна"],
  },
  password: {
    type: String,
    required: [true, "Нууц үгээ заавал оруулна уу"],
    minlenght: [8, "Нууц үг сул2"],
    select: false,
  },
  avatarUrl: {
    type: String,
  },
  address: {
    duureg: String,
    horoo: String,
  },
  otp: {
    type: String,
    default: "",
  },
  role: {
    type: ["admin", "user", "moderator"],
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function () {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
});

const User = model("User", userSchema);
export default User;
