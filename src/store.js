// store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from 'reducers/postReducer'; // Your post reducer
import userReducer from 'reducers/userReducer'; // Your user reducer
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
  middleware: [thunk], // If you're using Redux Thunk middleware
});

export default store;
