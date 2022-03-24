import mongoose from "mongoose";

const db = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(`${db}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    // console.log(error.message);
    process.exit(1);
  }
};

export default dbConnect;
