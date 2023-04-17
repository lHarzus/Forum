import {
  GET_POST,
  POST_ERROR,
  GET_POSTS,
  POSTS_ERROR,
  GET_COMMENT,
  GET_COMMENTS,
  COMMENT_ERROR,
  COMMENTS_ERROR,
  ADD_COMMENT,
  ADD_ERROR,
  ADD_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  post: [],
  comment: [],
  comments: [],
};

export default function Alert(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
        post: payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload],
        comment: [...state.comment, payload],
      };
    case ADD_ERROR:
    case COMMENTS_ERROR:
    case COMMENT_ERROR:
    case POSTS_ERROR:
    case POST_ERROR:
      return state;
    default:
      return state;
  }
}
