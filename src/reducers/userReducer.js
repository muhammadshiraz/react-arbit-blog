import {
  INCREMENT_POST_COUNT,
  DECREMENT_POST_COUNT,
  SET_POST_COUNT,
} from 'actions/userActions';

const initialState = {
  userId: 1, // Assuming user is logged in with ID 1
  postCount: Number,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_POST_COUNT:
      return {
        ...state,
        postCount: state.postCount + 1,
      };
    case DECREMENT_POST_COUNT:
      return {
        ...state,
        postCount: state.postCount - 1,
      };
    case SET_POST_COUNT:
      return {
        ...state,
        postCount: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
