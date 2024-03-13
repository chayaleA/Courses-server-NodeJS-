<<<<<<< HEAD
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Angular-courses', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Mongo connected");
}

main().catch(err => console.log(err));

export default main;
=======
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Angular-courses', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Mongo connected");
}

main().catch(err => console.log(err));

export default main;
>>>>>>> 9b5fd39f4074b4af8a7949091d2fcb269cb8081e
