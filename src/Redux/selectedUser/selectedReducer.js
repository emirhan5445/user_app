import { SELECTED_USER } from "./selectedTypes";

const initialState = {
    selectedUser: {}
};

export const selectedReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SELECTED_USER:
            return {
                ...state,
                selectedUser: payload
            };
        default:
            return state;
    }
};