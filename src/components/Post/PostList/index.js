import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "actions/postActions";
import { Link } from "react-router-dom"; // Import the Link component
import "./PostList.scss"; // Import the SCSS file
import CreatePost from "components/Post/CreatePost";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);  

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = async (postId) => {
    try {
      // Attempt to delete the post
      await dispatch(deletePost(postId));      
      // If the deletePost action succeeds, decrement the post count      
    } catch (error) {
      // Handle any errors that occur during the deletion process
      console.error('Error deleting post:', error);
    }
  };
  
  return (
    <div className="container mx-auto px-12">
      <div className="flex flex-row justify-center items-center bg-white my-5 px-5 py-12 shadow-md">
        {posts.length === 0 ? (
          <p className="text-center text-xl font-bold">Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-12">
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <h2 className="font-bold text-xl truncate mb-3">
                    {post.title}
                  </h2>
                  <p className="line-clamp-3">{post.body}</p>
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeletePost(post.id)}
                  className="bg-red-500 text-white py-2 px-2 rounded-md hover:bg-red-600 mt-6 flex flex-row gap-x-2 justify-center items-center"
                >
                  <i
                    className="fa fa-trash text-white-500"
                    aria-hidden="true"
                  ></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <CreatePost />
    </div>
  );
};

export default PostList;
