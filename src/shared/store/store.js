import {createStore, combineReducers} from "redux";

import AppReducer from "./app/AppReducer";

const rootReducer = combineReducers({
    AppReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
