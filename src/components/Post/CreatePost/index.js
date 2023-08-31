import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "actions/postActions";
import "./CreatePost.scss"; // Import the SCSS file

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreatePost = () => {
    // Create a new post object with the form data
    const newPost = {
      title,
      body,
    };

    // Dispatch the createPost action to create the new post
    dispatch(createPost(newPost));

    // Reset the form fields
    setTitle("");
    setBody("");
  };

  return (
    <div className="flex flex-col w-full mb-8">
      <h1 className="font-bold text-xl mb-3 text-left">Create a New Post</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-600">
            Detail
          </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleCreatePost}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
