import { SET_USERS } from "./usersTypes";

export const setUsers = (users) => {
    return {
      type: SET_USERS,
      payload: users,
    };
};