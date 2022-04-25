import mongoose from "mongoose";

export const connectionDB = () => {
  mongoose
    .connect("mongodb://localhost:27000/hexatech", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then("connected to mongodb")
    .catch((e) => console.log(e));
};
