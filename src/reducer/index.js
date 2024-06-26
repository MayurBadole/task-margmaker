import { combineReducers } from "redux";
import usersReducer from "../reducer/usersReducer";
import groupsReducer from "../reducer/groupsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  groups: groupsReducer,
});

export default rootReducer;
