import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: String,
  content: String,
  image: String,
});

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
