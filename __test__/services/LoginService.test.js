import LoginService from "../../src/services/LoginService";
import {useDeps} from "../../src/shared/context/DependencyContext";

const mockSetData = jest.fn();

jest
    .mock("../../src/shared/context/DependencyContext", () => ({
        useDeps: jest.fn().mockReturnValue({
            apiClient: jest.fn().mockResolvedValue({
                "access_token": "token123"
            })
        })
    }))
    .mock("../../src/shared/utils/LocalStorage", () => ({
        __esModule: true,
        default: jest.fn(() => ({
            setData: mockSetData
        }))
    }))

describe("LoginService", () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    test("login", async () => {
        const email = "email@email.com";
        const password = "password";

        await LoginService().login(email, password);

        expect(useDeps().apiClient).toHaveBeenCalledWith({
            method: "post",
            url: "auth/login",
            params: {
                email, password
            }
        })

        expect(mockSetData).toHaveBeenCalledWith("token", "token123")
    })
})
