// Action Types
export const INCREMENT_POST_COUNT = 'INCREMENT_POST_COUNT';
export const DECREMENT_POST_COUNT = 'DECREMENT_POST_COUNT';
export const SET_POST_COUNT = 'SET_POST_COUNT';

// Action Creators
export const incrementPostCount = () => ({
  type: INCREMENT_POST_COUNT,
});

export const decrementPostCount = () => ({
  type: DECREMENT_POST_COUNT,
});

export const setPostCount = (count) => ({
  type: SET_POST_COUNT,
  payload: count,
});
