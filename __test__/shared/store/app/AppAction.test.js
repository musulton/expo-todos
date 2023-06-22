import {
    SHOW_LOADING,
    SHOW_ERROR
} from "../../../../src/shared/store/app/AppAction";
import {
    showLoading,
    showError
} from "../../../../src/shared/store/app/AppAction";

describe("AppAction", () => {
    test("show loading action", () => {
        const isShow = true;

        const action = showLoading(isShow);

        expect(action).toEqual({
            type: SHOW_LOADING,
            payload: isShow
        })
    })

    test("show error action", () => {
        const errMsg = "error";

        const action = showError(errMsg);

        expect(action).toEqual({
            type: SHOW_ERROR,
            payload: errMsg
        })
    })
})
