import React, { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "./apis";

const AddPost = () => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const createPostMutation = useMutation({
    mutationFn: createPost,
  });

  const onCreatePost = (e) => {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current.value,
      body: createPostMutation.current.value,
      userId: 1,
      id: Date.now(),
    });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <div style={{ marginTop: "10px" }}>
        <label>Title</label>
        <input ref={titleRef} type="text" placeholder="Enter Title"></input>
        <label ref={bodyRef}>Body</label>
        <input type="text" placeholder="Enter Body"></input>
      </div>
      <button onClick={onCreatePost}>Create</button>
    </div>
  );
};

export default AddPost;
