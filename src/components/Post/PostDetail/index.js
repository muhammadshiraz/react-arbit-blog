import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrementPostCount } from "actions/userActions";
import { fetchPostComments } from "actions/postActions"; // Import the new action
import "./PostDetail.scss"; // Import the SCSS file
import leftArrowImage from "assets/image/icons/left-arrow.png";

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === Number(id))
  );

  // State for editing
  const [editedTitle, setEditedTitle] = React.useState("");
  const [editedBody, setEditedBody] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);

  const comments = useSelector((state) => state.posts.comments); // Get comments from the store

  React.useEffect(() => {
    dispatch(fetchPostComments(id)); // Fetch comments when the component mounts
    if (post) {
      setEditedTitle(post.title);
      setEditedBody(post.body);
    }
  }, [dispatch, id, post]);

  const navigateToPreviousPage = () => {
    // Use history.goBack() to navigate back to the previous page
    navigate(-1);
  };

  const handleDeletePost = () => {
    // You can dispatch actions here to delete the post and update the Redux state
    // For example, make an API request to delete the post and then dispatch the necessary actions
    // Here, I'm just simulating the action of decrementing the post count
    dispatch(decrementPostCount());

    // Use navigate to redirect to the list of posts
    navigate(-1);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setEditedBody(e.target.value);
  };

  const handleEditPost = () => {
    // Toggle edit mode
    setIsEditing(true);
  };

  const handleUpdatePost = () => {
    // Update the post in Redux (you need to implement this)
    // After updating, toggle off edit mode
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-12">
      <div className="flex flex-col justify-center items-center bg-white my-5 px-5 py-12 shadow-md">
        <div className="flex flex-row justify-between items-center w-3/5 mb-6">
          <div className="flex flex-row justify-center items-center gap-x-3">
            <button
              type="button"
              className="bg-[#d4d4d4] flex flex-row justify-center items-center w-10 h-10 rounded-full"
              onClick={navigateToPreviousPage}
            >
              <img src={leftArrowImage} alt="Posts" className="p-2.5" />
            </button>
            <span className="text-xl font-bold">Posts</span>
          </div>
          <button
            type="button"
            onClick={handleDeletePost}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 flex flex-row gap-x-2 justify-center items-center"
          >
            <i className="fa fa-plus text-white-500" aria-hidden="true"></i>New
            Post
          </button>
        </div>
        {post ? (
          <div className="flex flex-col items-start justify-start w-3/5 text-left mb-12">
            {/* <h1 className='font-bold text-xl mb-3 text-left'>{post.title}</h1> */}
            <input
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              className={`font-bold text-xl mb-3 text-left ${
                isEditing ? "edit-mode" : ""
              }`}
              disabled={!isEditing}
            />
            {/* <p>{post.body}</p> */}

            <textarea
              rows="4" // Set the number of visible lines to 4
              className={isEditing ? "edit-mode" : ""}
              value={editedBody}
              onChange={handleBodyChange}
              disabled={!isEditing}
            />
          </div>
        ) : (
          <p className="text-center text-xl font-bold">Post not found</p>
        )}
        <div className="flex flex-col justify-between items-start w-3/5 comment-box">
          <h2 className="font-bold text-lg mb-4 text-left">Comments:</h2>
          {comments ? (
            <div>
              {comments.map((comment) => (
                <p className="comment" key={comment.id}>
                  {comment.body}
                </p>
              ))}
            </div>
          ) : (
            <p>No comments available.</p>
          )}
        </div>
        <div className="flex flex-row justify-end items-center w-3/5 gap-x-5">
          <button
            type="button"
            onClick={handleDeletePost}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-6 flex flex-row gap-x-2 justify-center items-center"
          >
            <i className="fa fa-trash text-white-500" aria-hidden="true"></i>
            Delete
          </button>
          {isEditing ? (
            <button
              type="button"
              onClick={handleUpdatePost}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-6 flex flex-row gap-x-2 justify-center items-center"
            >
              <i
                className="fa fa-floppy-o text-white-500"
                aria-hidden="true"
              ></i>
              Save
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEditPost}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-6 flex flex-row gap-x-2 justify-center items-center"
            >
              <i className="fa fa-pencil text-white-500" aria-hidden="true"></i>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
