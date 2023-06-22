import appReducer, { initialState } from "../../../../src/shared/store/app/AppReducer";
import {
    SHOW_LOADING,
    SHOW_ERROR
} from "../../../../src/shared/store/app/AppAction";

describe("AppReducer", () => {
    test("show loading type", () => {
        const action = {
            type: SHOW_LOADING,
            payload: true
        };

        const result = appReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            isLoading: action.payload
        })
    })

    test("show error type", () => {
        const action = {
            type: SHOW_ERROR,
            payload: "error"
        };

        const result = appReducer(initialState, action);

        expect(result).toEqual({
            ...initialState,
            errorMessage: action.payload
        })
    })
})
