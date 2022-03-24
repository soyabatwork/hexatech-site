import Image from "next/image";
import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import PostList from "../../components/admin/PostList";

const Index = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { title: title, content: content, image: image.base64 };

    const post = await fetch("api/posts", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log(post);
  };

  const uploadToClient = ({ base64 }) => {
    console.log(setImage({ base64 }));
  };
  console.log(image.base64);
  return (
    <div className="h-screen px-2 py-20 bg-blue-primary ">
      <form onSubmit={submitHandler} className="dashboard-container">
        <div className="flex flex-col">
          <label>Post Title</label>
          <input
            className="p-3"
            placeholder="Post title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Content</label>
          <textarea
            placeholder="Write post description"
            className="p-3"
            name=""
            id=""
            cols="40"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
          />

          <label>Optional Image</label>
          <FileBase64 multiple={false} onDone={uploadToClient} />
          {image && <Image height="100" width="100" src={image.base64} />}
        </div>
        <button className="mt-5 bg-gray-500 btn text-gray-50">Submit</button>
      </form>
      <PostList />
    </div>
  );
};

export default Index;
