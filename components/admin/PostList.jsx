import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("api/posts");
      const posts = await response.json();
      setPosts(posts.data);
    };
    getPosts();
  }, []);

  const renderedPostsList = posts?.map((post) => {
    return <h3>{post.title}</h3>;
  });

  return <div className="p-5 mt-3 bg-gray-50">{renderedPostsList}</div>;
};

export default PostList;
