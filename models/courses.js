import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    nameCourse: String,
    kodeKategory: String,
    amountLessons: Number,
    startCourseDate: String,
    wayLearning: Number,
    kodeLecture: String,
    image: String,
    videosArr: Array
})

const courseModel = mongoose.model("courses", courseSchema);
export default courseModel;