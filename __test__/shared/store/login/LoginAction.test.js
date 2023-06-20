import {
    LOGIN,
    LOGOUT,
    login,
    logout
} from "../../../../src/shared/store/login/LoginAction";

describe("LoginAction", () => {
    test("login action", () => {
        const action = login();

        expect(action).toEqual({
            type: LOGIN
        });
    });

    test("logout action", () => {
        const action = logout();

        expect(action).toEqual({
            type: LOGOUT
        });
    })
})
