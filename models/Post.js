import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 70,
    },
    description: {
      type: String,
      maxLength: 200,
    },
    images: [],
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
