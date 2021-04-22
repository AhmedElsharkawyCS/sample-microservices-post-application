import { combineReducers } from "redux";
import posts from "./Post";
const blogApp = combineReducers({ posts });

export default blogApp;
