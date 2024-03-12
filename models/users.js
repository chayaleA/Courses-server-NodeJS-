import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    mail: String,
    password: String
})

const userModel = mongoose.model("users", userSchema);
export default userModel;