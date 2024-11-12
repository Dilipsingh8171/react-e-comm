import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    name: {
        type: String,
        reuired: [true, "Name is required"],
        trim: true,
    },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },

    password: {
        type: String,
        reuired: [true, "password is required"]
    },
  

    role: {
        type: Number,
        default: 1,
    }


}, { timestamps: true })


export default mongoose.model("users", userSchema)

