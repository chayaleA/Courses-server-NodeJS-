<<<<<<< HEAD
import mongoose from 'mongoose';

const lecturerSchema = new mongoose.Schema({
    name: String,
    address: String,
    mail: String,
    password: String
})

const lecturerModel = mongoose.model("lecturers", lecturerSchema);
=======
import mongoose from 'mongoose';

const lecturerSchema = new mongoose.Schema({
    name: String,
    address: String,
    mail: String,
    password: String
})

const lecturerModel = mongoose.model("lecturers", lecturerSchema);
>>>>>>> 9b5fd39f4074b4af8a7949091d2fcb269cb8081e
export default lecturerModel;