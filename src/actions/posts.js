import axios from "axios";
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

//Get all posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
    });
  }
};

//Get post by id
export const getPostById = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

//Get post by user id
export const getPostByUserId = userId => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

//Get comments
export const getComments = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments`
    );

    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENTS_ERROR,
    });
  }
};

//Get comments by post id
export const getCommentsByPostid = postId => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );

    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
    });
  }
};

//Add Post
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      formData,
      config
    );

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_ERROR,
    });
  }
};

//Add Comment
export const addComment = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_ERROR,
    });
  }
};
