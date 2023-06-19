import {createStore, combineReducers} from "redux";

import AppReducer from "./app/AppReducer";
import LoginReducer from "./login/LoginReducer";

const rootReducer = combineReducers({
    AppReducer,
    LoginReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
