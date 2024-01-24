import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email: String,
    password: String

})

const User = model("User", userSchema, )
export default User