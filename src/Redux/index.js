import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { selectedReducer } from "./selectedUser/selectedReducer";

const reducers = combineReducers({
    allUsers: usersReducer,
    user: selectedReducer
});

export default reducers;