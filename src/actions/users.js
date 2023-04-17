import axios from "axios";
import {
  GET_TODO,
  TODO_ERROR,
  GET_TODOS,
  TODOS_ERROR,
  GET_USER,
  GET_USERS,
  USER_ERROR,
  USERS_ERROR,
  ADD_USER,
  ADD_ERROR,
  ADD_TODO,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} from "../actions/types";

//Get all users
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
    });
  }
};

//Get user by id
export const getUserById = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
    });
  }
};

//Get user by id
export const getUserByUsername = username => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
    });
  }
};

//Get user by email
export const getUserByEmail = email => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users?email=${email}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
    });
  }
};

//Get todos
export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
    });
  }
};

//Get todos
export const getTodosByUserid = userId => async dispatch => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );

    dispatch({
      type: GET_TODO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
    });
  }
};

//Add user
export const addUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      formData,
      config
    );
    console.log(res.data);

    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_ERROR,
    });
  }
};

//Add todo
export const addTodo = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      formData,
      config
    );

    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_ERROR,
    });
  }
};

//Login user
export const loginUser = formData => async dispatch => {
  try {
    dispatch({
      type: LOGIN,
      payload: formData,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
    });
  }
};

//Logout
export const logout = () => async dispatch => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
    });
  }
};
