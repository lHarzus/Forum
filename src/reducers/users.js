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

const initialState = {
  users: [],
  user: null,
  todo: [],
  todos: [],
  logged: false,
  account: null,
};

export default function Alert(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...payload],
      };
    case GET_USER:
      return {
        ...state,
        user: [...state.user, payload],
      };
    case GET_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...payload],
      };
    case GET_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
        user: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
        todo: payload,
      };
    case LOGIN:
      return {
        ...state,
        account: payload,
        logged: true,
      };
    case ADD_ERROR:
    case TODOS_ERROR:
    case TODO_ERROR:
    case USERS_ERROR:
    case USER_ERROR:
      return state;
    case LOGOUT:
    case LOGIN_ERROR:
      return {
        ...state,
        account: null,
        logged: false,
      };
    default:
      return state;
  }
}
