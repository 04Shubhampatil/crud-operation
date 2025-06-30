import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    fristName: String,
    lastName: String,
    age: Number,
    city: String,
})

const User = mongoose.model("User", userSchema)

export default User