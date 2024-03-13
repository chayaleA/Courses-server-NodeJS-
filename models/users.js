<<<<<<< HEAD
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    mail: String,
    password: String
})

const userModel = mongoose.model("users", userSchema);
=======
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    address: String,
    mail: String,
    password: String
})

const userModel = mongoose.model("users", userSchema);
>>>>>>> 9b5fd39f4074b4af8a7949091d2fcb269cb8081e
export default userModel;