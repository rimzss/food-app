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
  orders: [
    {
      orderNo: String,
      foods: [
        {
          food: {
            type: Schema.ObjectId,
            ref: "Food",
          },
          count: Number,
        },
      ],
      payment: {
        paymentAmount: {
          type: Number,
          default: 0,
        },
        method: {
          type: String,
          enum: ["Card", "Qpay"],
        },
        status: {
          type: String,
          enum: ["paid", "unpaid"],
          default: "unpaid",
        },
        paidDate: {
          type: Date,
          default: Date.now,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
      address: {
        khoroo: { type: String },
        duureg: { type: String },
        buildingNo: { type: String },
        info: String,
      },
      delivery: {
        status: {
          type: String,
          enum: ["Pending", "Progressing", "Delivered"],
          default: "Pending",
        },
        deliveredAt: {
          type: Date,
          default: Date.now,
        },
      },
      phoneNumber: {
        type: Number,
      },
    },
  ],
});

userSchema.pre("save", async function async(next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

const User = model("User", userSchema);
export default User;
