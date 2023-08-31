import axios from 'axios';
import { incrementPostCount, decrementPostCount, setPostCount } from 'actions/userActions';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Action Types
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = (limit = 10) => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}?_limit=${limit}`); // Add the limit parameter
    const fetchedPosts = response.data;

    // Dispatch action to set the post count based on the fetched posts
    dispatch(setPostCount(fetchedPosts.length));

    dispatch({ type: 'FETCH_POSTS', payload: fetchedPosts });
  } catch (error) {
    // Handle error, you can dispatch an error action if needed
    console.error('Error fetching posts:', error);
  }
};

export const fetchPostComments = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/${postId}/comments`);
    const comments = response.data;
    dispatch({ type: FETCH_POST_COMMENTS, payload: comments });
  } catch (error) {
    console.error('Error fetching post comments:', error);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, postData);
    dispatch({ type: CREATE_POST, payload: response.data });
    dispatch(incrementPostCount());
  } catch (error) {
    console.error('Error creating post:', error);
  }
};

export const updatePost = (postId, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${postId}`, updatedData);
    // Assuming the API returns the updated post
    dispatch({ type: 'UPDATE_POST', payload: response.data });
  } catch (error) {
    // Handle error, you can dispatch an error action if needed
    console.error('Error updating post:', error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${postId}`);
    // Assuming successful deletion, you can dispatch a success action
    dispatch({ type: 'DELETE_POST', payload: postId });
    // Decrement the post count
    dispatch(decrementPostCount());
  } catch (error) {
    // Handle error, you can dispatch an error action if needed
    console.error('Error deleting post:', error);
  }
};
