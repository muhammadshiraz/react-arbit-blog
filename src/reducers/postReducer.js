const initialState = {
  posts: [],
  comments: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload };
    case 'FETCH_POST_COMMENTS':      
      return { ...state, comments: action.payload };
    case 'CREATE_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    case 'UPDATE_POST':
      // Find the updated post and replace it in the array
      const updatedPosts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return { ...state, posts: updatedPosts };
    case 'DELETE_POST':
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
    default:
      return state;
  }
};

export default postReducer;
