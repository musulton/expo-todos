import loginReducer from "../../../../src/shared/store/login/LoginReducer";
import {
    LOGIN,
    LOGOUT
} from "../../../../src/shared/store/login/LoginAction";

describe("LoginReducer", () => {
    test("Login type", () => {
        const initState = undefined;
        const action = {
            type: LOGIN
        };

        const result = loginReducer(initState, action);

        expect(result).toEqual({
            isLoggedIn: true
        })
    });

    test("Logout type", () => {
        const initState = undefined;
        const action = {
            type: LOGOUT
        };

        const result = loginReducer(initState, action);

        expect(result).toEqual({
            isLoggedIn: false
        })
    })
})
