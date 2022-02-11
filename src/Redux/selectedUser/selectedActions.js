import { SELECTED_USER } from "./selectedTypes";

export const selectedUser = (user) => {
    return {
        type: SELECTED_USER,
        payload: user
    };
};