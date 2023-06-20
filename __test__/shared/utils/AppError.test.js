import {
    GlobalError, UnauthorizedError
} from "../../../src/shared/utils/AppError";

describe("AppError", () => {
    test("create global error properly", () => {
        const errMessage = "error";
        const err = new GlobalError(errMessage);

        expect(err.name).toEqual("GlobalError");
        expect(err.message).toEqual(errMessage);
    });
})
