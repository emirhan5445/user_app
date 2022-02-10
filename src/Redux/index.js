import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";

const reducers = combineReducers({
    allUsers: usersReducer,
});

export default reducers;