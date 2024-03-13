<<<<<<< HEAD
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    url: String
})

const categoryModel = mongoose.model("categories", categorySchema);
=======
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    url: String
})

const categoryModel = mongoose.model("categories", categorySchema);
>>>>>>> 9b5fd39f4074b4af8a7949091d2fcb269cb8081e
export default categoryModel;