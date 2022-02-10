import { SET_USERS } from "./usersTypes";

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: payload
            };
        default:
            return state;
    }
};