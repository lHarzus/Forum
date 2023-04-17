import { combineReducers } from "redux";
import albums from "./albums";
import posts from "./posts";
import users from "./users";

export default combineReducers({
  albums,
  posts,
  users,
});
