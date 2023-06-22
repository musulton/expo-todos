import {
    SHOW_LOADING,
    SHOW_ERROR
} from "./AppAction";

export const initialState = {
    isLoading: false,
    errorMessage: ""
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            };
        }
        case SHOW_ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        default:
            return state;
    }
}

export default AppReducer;
